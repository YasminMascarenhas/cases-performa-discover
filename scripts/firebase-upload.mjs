#!/usr/bin/env node
/**
 * Sobe todo o conteúdo estático (imagens + textos) para o Firebase.
 *
 * - Imagens (logos, capas, mockups usados nos cases) → Firebase Storage
 * - Metadados dos cases + segmentos + textos das páginas → Firestore
 *
 * Uso:
 *   node scripts/firebase-upload.mjs
 *
 * Pré-requisitos: veja scripts/README-firebase.md
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import admin from "firebase-admin";

// ---------- Configuração ----------
const SERVICE_ACCOUNT_PATH =
  process.env.FIREBASE_SERVICE_ACCOUNT ||
  path.resolve(process.cwd(), "firebase-service-account.json");

const STORAGE_BUCKET =
  process.env.FIREBASE_STORAGE_BUCKET; // ex: "meu-projeto.appspot.com"

const CDN_BASE = "https://cdn.lovable.dev"; // fallback público para /__l5e/assets-v1/...
// A URL real dos asset.json é servida pelo domínio do preview/publish do Lovable.
// Vamos usar o project_id do próprio asset.json para montar a URL pública oficial.

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const ASSETS_DIR = path.join(SRC, "assets");
const CASES_TS = path.join(SRC, "data", "cases.ts");
const APP_TSX = path.join(SRC, "App.tsx");
const PAGES_DIR = path.join(SRC, "pages");

// ---------- Inicialização Firebase ----------
if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
  console.error(
    `❌ service account não encontrado em ${SERVICE_ACCOUNT_PATH}\n   defina FIREBASE_SERVICE_ACCOUNT ou salve o JSON em firebase-service-account.json`,
  );
  process.exit(1);
}
if (!STORAGE_BUCKET) {
  console.error("❌ Defina a variável de ambiente FIREBASE_STORAGE_BUCKET (ex: meu-projeto.appspot.com)");
  process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, "utf8"));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: STORAGE_BUCKET,
});
const db = admin.firestore();
const bucket = admin.storage().bucket();

// ---------- Utilidades ----------
const readText = (p) => fs.readFileSync(p, "utf8");

/** Resolve alias @/ para src/ e retorna caminho absoluto de um import. */
function resolveImport(fromFile, spec) {
  let base;
  if (spec.startsWith("@/")) base = path.join(SRC, spec.slice(2));
  else if (spec.startsWith(".")) base = path.resolve(path.dirname(fromFile), spec);
  else return null;
  // Se o próprio spec já termina em extensão, use-o
  if (fs.existsSync(base)) return base;
  // extensão pode estar omitida (raro aqui)
  for (const ext of [".ts", ".tsx", ".js", ".json"]) {
    if (fs.existsSync(base + ext)) return base + ext;
  }
  return null;
}

/** Sobe um arquivo local para o Storage e retorna a URL pública. */
async function uploadFile(localPath, destination, contentType) {
  const [file] = await bucket.upload(localPath, {
    destination,
    metadata: { contentType, cacheControl: "public, max-age=31536000, immutable" },
    public: true,
  });
  await file.makePublic().catch(() => {});
  return `https://storage.googleapis.com/${bucket.name}/${destination}`;
}

/** Baixa uma URL para /tmp e retorna o caminho local. */
async function downloadToTmp(url, filename) {
  const tmp = path.join("/tmp", `fb-upload-${Date.now()}-${filename}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download falhou (${res.status}) ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(tmp, buf);
  return tmp;
}

// ---------- Parse do cases.ts ----------
/**
 * Lê os imports do cases.ts e devolve um mapa:
 *   varName -> { kind: "asset"|"image", assetJson?, localPath? }
 */
function parseImports(source, fromFile) {
  const importRe = /import\s+(\w+)\s+from\s+["']([^"']+)["'];?/g;
  const map = new Map();
  let m;
  while ((m = importRe.exec(source))) {
    const [, name, spec] = m;
    const resolved = resolveImport(fromFile, spec);
    if (!resolved) continue;
    if (resolved.endsWith(".asset.json")) {
      const j = JSON.parse(fs.readFileSync(resolved, "utf8"));
      map.set(name, { kind: "asset", assetJson: j, importPath: resolved });
    } else if (/\.(png|jpe?g|webp|svg|gif|avif)$/i.test(resolved)) {
      map.set(name, { kind: "image", localPath: resolved });
    }
  }
  return map;
}

/**
 * Substitui referências a variáveis importadas por strings literais,
 * para que a array `cases`/`segments` possa ser avaliada com `Function`.
 * Para asset.json usamos assetJson.url; para .png/.jpg guardamos o caminho local (`file://...`).
 */
function stubReferences(code, importMap) {
  let out = code;
  // remove imports e a linha de lucide-react
  out = out.replace(/^import[^\n]*\n/gm, "");
  // remove `type Xxx = ...` e `interface ...` para simplificar
  out = out.replace(/export\s+type\s+\w+[^;]*;/g, "");
  out = out.replace(/export\s+interface\s+\w+\s*\{[\s\S]*?\}\s*/g, "");
  // remove tipagens `: LucideIcon` e similar
  out = out.replace(/:\s*LucideIcon/g, "");
  out = out.replace(/:\s*(Category|SegmentName|Segment\[\]|CaseItem\[\]|Category\[\])/g, "");
  // ícones lucide-react → string
  for (const icon of ["Sprout","GraduationCap","Gamepad2","Factory","Landmark","HeartPulse","Briefcase","ShoppingBag"]) {
    out = out.replace(new RegExp(`\\b${icon}\\b`, "g"), JSON.stringify(icon));
  }

  for (const [name, info] of importMap.entries()) {
    const url = info.kind === "asset" ? info.assetJson.url : `local://${info.localPath}`;
    // varName.url
    out = out.replace(new RegExp(`\\b${name}\\.url\\b`, "g"), JSON.stringify(url));
    // varName (identifier standalone)
    out = out.replace(new RegExp(`\\b${name}\\b`, "g"), JSON.stringify(url));
  }
  return out;
}

function evalCasesModule() {
  const src = readText(CASES_TS);
  const imports = parseImports(src, CASES_TS);
  const stubbed = stubReferences(src, imports);

  // constrói um mini-módulo executável
  const wrapped = `
    "use strict";
    ${stubbed}
    return { cases, segments, categories };
  `;
  const fn = new Function(wrapped);
  const mod = fn();
  return { ...mod, imports };
}

// ---------- Parse dos routes (slug → arquivo de página) ----------
function buildSlugToPage() {
  const src = readText(APP_TSX);
  const importRe = /import\s+(\w+)\s+from\s+["']\.\/pages\/(\w+)\.tsx["']/g;
  const compToFile = new Map();
  let m;
  while ((m = importRe.exec(src))) compToFile.set(m[1], m[2] + ".tsx");

  const routeRe = /path=["']\/case\/([\w-]+)["']\s+element=\{<(\w+)\s*\/>\}/g;
  const map = new Map();
  while ((m = routeRe.exec(src))) {
    const slug = m[1];
    const comp = m[2];
    const file = compToFile.get(comp);
    if (file) map.set(slug, path.join(PAGES_DIR, file));
  }
  return map;
}

// ---------- Extrai textos de uma página React ----------
/** Devolve um objeto com { headings, paragraphs, lists, rawText } a partir do JSX. */
function extractPageText(pagePath) {
  const code = readText(pagePath);
  // Remove imports e comentários
  let stripped = code.replace(/^import[^\n]*\n/gm, "").replace(/\/\*[\s\S]*?\*\//g, "");

  const headings = [];
  const paragraphs = [];
  const listItems = [];

  // <h1..h6>...</h1..h6>
  for (const m of stripped.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g)) {
    const t = cleanJsxText(m[2]);
    if (t) headings.push({ level: Number(m[1]), text: t });
  }
  // <p ...>...</p>
  for (const m of stripped.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)) {
    const t = cleanJsxText(m[1]);
    if (t) paragraphs.push(t);
  }
  // <li ...>...</li>
  for (const m of stripped.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)) {
    const t = cleanJsxText(m[1]);
    if (t) listItems.push(t);
  }
  // arrays de labels: label: "..."  (comum em "results", "stats")
  const labels = [];
  for (const m of stripped.matchAll(/label:\s*["'`]([^"'`]+)["'`]/g)) labels.push(m[1]);

  return {
    headings,
    paragraphs,
    listItems,
    labels,
    rawSource: code, // guardamos o fonte como fallback
  };
}

function cleanJsxText(s) {
  return s
    .replace(/\{[^}]*?["'`]([^"'`]*)["'`][^}]*?\}/g, "$1") // {"foo"} → foo
    .replace(/\{[^}]*\}/g, " ") // outras expressões {expr}
    .replace(/<[^>]+>/g, " ") // tags aninhadas
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ---------- Sobe uma imagem (asset ou local) ----------
const uploadedCache = new Map();
async function ensureUploaded(ref) {
  if (!ref) return null;
  if (uploadedCache.has(ref)) return uploadedCache.get(ref);

  let localPath, filename, contentType;

  if (ref.startsWith("local://")) {
    localPath = ref.slice("local://".length);
    filename = path.basename(localPath);
    contentType = guessMime(filename);
  } else if (ref.startsWith("/__l5e/assets-v1/")) {
    // URL relativa do Lovable Assets → precisamos do host público
    const url = `${CDN_BASE}${ref}`;
    filename = path.basename(ref);
    localPath = await downloadToTmp(url, filename);
    contentType = guessMime(filename);
  } else if (/^https?:\/\//.test(ref)) {
    filename = path.basename(new URL(ref).pathname) || "image";
    localPath = await downloadToTmp(ref, filename);
    contentType = guessMime(filename);
  } else {
    return ref; // string qualquer, deixa como está
  }

  const destination = `cases/images/${filename}`;
  console.log(`  ⬆️  ${filename}`);
  const publicUrl = await uploadFile(localPath, destination, contentType);
  uploadedCache.set(ref, publicUrl);
  return publicUrl;
}

function guessMime(name) {
  const ext = path.extname(name).toLowerCase();
  return {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".gif": "image/gif",
    ".avif": "image/avif",
  }[ext] || "application/octet-stream";
}

// ---------- Main ----------
async function main() {
  console.log("📦 Lendo cases.ts...");
  const { cases, segments, categories } = evalCasesModule();
  const slugToPage = buildSlugToPage();

  console.log(`   ${cases.length} cases, ${segments.length} segmentos`);

  // Sobe imagens dos cases
  console.log("\n☁️  Enviando imagens para o Storage...");
  for (const c of cases) {
    if (c.logo) c.logo = await ensureUploaded(c.logo);
    if (c.coverImage) c.coverImage = await ensureUploaded(c.coverImage);
  }
  for (const s of segments) {
    if (!s.projects) continue;
    for (const p of s.projects) if (p.logo) p.logo = await ensureUploaded(p.logo);
  }

  // Grava cases no Firestore
  console.log("\n🔥 Gravando Firestore /cases ...");
  for (const c of cases) {
    const pageFile = c.slug ? slugToPage.get(c.slug) : null;
    const content = pageFile && fs.existsSync(pageFile) ? extractPageText(pageFile) : null;

    const doc = {
      ...c,
      content, // { headings, paragraphs, listItems, labels, rawSource }
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    };
    const id = c.slug || c.id;
    await db.collection("cases").doc(id).set(doc, { merge: true });
    console.log(`  ✅ ${id}`);
  }

  // Grava segmentos e categorias
  console.log("\n🔥 Gravando Firestore /segments e /meta ...");
  for (const s of segments) {
    await db.collection("segments").doc(s.name).set(s, { merge: true });
  }
  await db.collection("meta").doc("categories").set({ list: categories });

  console.log("\n✨ Concluído.");
}

main().catch((err) => {
  console.error("💥 Erro:", err);
  process.exit(1);
});
