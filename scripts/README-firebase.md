# Upload de conteúdo estático para o Firebase

Este script sobe **todas as imagens** dos cases para o **Firebase Storage** e
**todos os textos** (metadados + títulos, parágrafos, listas e labels
extraídos das páginas `src/pages/Case*.tsx`) para o **Firestore**.

## 1. Criar o projeto Firebase

1. Acesse https://console.firebase.google.com e clique em **Add project**.
2. Escolha um nome (ex: `performait-cases`) e conclua o wizard.
3. Depois de criado, no menu à esquerda:
   - **Build → Firestore Database** → *Create database* → modo de produção → região `southamerica-east1`.
   - **Build → Storage** → *Get started* → mesma região.
4. Vá em **Project settings → General** e anote o **Project ID** e o
   **Storage bucket** (formato `NOME.appspot.com`).

## 2. Baixar a Service Account

1. **Project settings → Service accounts → Generate new private key**.
2. Salve o JSON gerado como `firebase-service-account.json` na raiz do projeto
   (o arquivo já está no `.gitignore` implícito por segurança — **nunca comite**).

## 3. Instalar dependências

```bash
npm install --save-dev firebase-admin
```

> Já rodando em Node 18+ (fetch nativo). Caso use Node 16, instale também
> `node-fetch` e importe-o no topo do script.

## 4. Configurar variáveis e rodar

```bash
export FIREBASE_STORAGE_BUCKET="SEU-PROJETO.appspot.com"
# opcional, default é ./firebase-service-account.json
export FIREBASE_SERVICE_ACCOUNT="$PWD/firebase-service-account.json"

node scripts/firebase-upload.mjs
```

Você verá algo como:

```
📦 Lendo cases.ts...
   30 cases, 8 segmentos
☁️  Enviando imagens para o Storage...
  ⬆️  axia-agro-logo.png
  ⬆️  ale-cover.png
  ...
🔥 Gravando Firestore /cases ...
  ✅ axia-agro
  ✅ ale-cockpit-tatico
  ...
✨ Concluído.
```

## 5. Estrutura no Firebase

**Storage** — todos os arquivos ficam em `cases/images/<nome-do-arquivo>` e
são públicos (`storage.googleapis.com/<bucket>/cases/images/...`).

**Firestore**:

- `cases/<slug>` — documento por case com todos os campos de `cases.ts`
  (`title`, `company`, `segment`, `tags`, etc), agora com `logo` e
  `coverImage` apontando para a URL do Storage. Inclui também `content`:

  ```json
  {
    "content": {
      "headings":   [{ "level": 2, "text": "Desafio" }, ...],
      "paragraphs": ["...", "..."],
      "listItems":  ["...", "..."],
      "labels":     ["500.000 chamadas testadas", ...],
      "rawSource":  "<código JSX bruto da página, como fallback>"
    }
  }
  ```

- `segments/<Nome>` — cada segmento e seus `projects` (com logos já no
  Storage).
- `meta/categories` — lista de categorias.

## 6. Rodar novamente

O script usa `set({ merge: true })`, então pode ser executado quantas vezes
quiser — atualiza os documentos existentes sem apagar campos extras.

## 7. Regras de segurança sugeridas

**Storage** (leitura pública, escrita somente admin):

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /cases/images/{file=**} { allow read; allow write: if false; }
  }
}
```

**Firestore** (leitura pública, escrita só via admin SDK):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    match /{doc=**} { allow read; allow write: if false; }
  }
}
```

## Observações

- O parser JSX é *best-effort*: extrai `<h1..h6>`, `<p>`, `<li>` e `label: "..."`.
  Para textos mais complexos, use o campo `rawSource` como referência.
- Imagens já hospedadas no CDN do Lovable (`/__l5e/assets-v1/...`) são
  baixadas via `https://cdn.lovable.dev` antes do re-upload. Caso seu
  projeto use outro host, ajuste a constante `CDN_BASE` no topo do script.
- Imports diretos de imagens (ex: `axia-agro-logo.png`) são lidos direto
  de `src/assets/` no filesystem.
