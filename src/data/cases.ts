export type Category = "Segmentos" | "Discovery & Design" | "Agile Development" | "Katalysis";

export type SegmentName =
  | "Agro"
  | "Educação"
  | "E-games"
  | "Indústria"
  | "Financeiro"
  | "Saúde"
  | "Serviços"
  | "Varejo";

export interface CaseItem {
  id: string;
  slug?: string;
  title: string;
  company: string;
  category: Category;
  extraCategories?: Category[];
  segment?: SegmentName;
  solution: string;
  method: string;
  description: string;
  tags: string[];
  coverImage?: string;
  coverPosition?: string;
  logo?: string;
}

import { Sprout, GraduationCap, Gamepad2, Factory, Landmark, HeartPulse, Briefcase, ShoppingBag, type LucideIcon } from "lucide-react";
import axiaAgroLogo from "@/assets/axia-agro-logo.png";
import yaraLogo from "@/assets/yara-logo.png";
import eurochemLogo from "@/assets/eurochem-logo.png";
import casaDaLavouraCover from "@/assets/casa-da-lavoura.jpg.asset.json";
import aiStrategyCover from "@/assets/ai-strategy.jpg.asset.json";
import aleLogo from "@/assets/ale-logo.png.asset.json";
import aleCover from "@/assets/ale-cover.png.asset.json";
import borgwarnerLogo from "@/assets/borgwarner-logo.png.asset.json";
import borgwarnerCover from "@/assets/borgwarner-sign.jpg.asset.json";
import cognaLogo from "@/assets/cogna-logo.png.asset.json";
import cognaCover from "@/assets/cogna-cover.jpg.asset.json";
import continentalLogo from "@/assets/continental-logo.png.asset.json";
import continentalCover from "@/assets/continental-cover.webp.asset.json";




export interface SegmentProject {
  company: string;
  title: string;
  logo?: string;
}

export interface Segment {
  name: string;
  icon: LucideIcon;
  projects?: SegmentProject[];
}

export const segments: Segment[] = [
  {
    name: "Agro",
    icon: Sprout,
    projects: [
      { company: "Axia Agro", title: "App Protocolo de Engorda", logo: axiaAgroLogo },
      { company: "Axia Agro", title: "AI_Strategy", logo: axiaAgroLogo },
      { company: "Axia Agro", title: "Portal Casa da Lavoura", logo: axiaAgroLogo },
      { company: "Eurochem", title: "Portal Tá Na Mão", logo: eurochemLogo },
      { company: "Yara", title: "Portal Automatizado", logo: yaraLogo },
    ],
  },
  { name: "Educação", icon: GraduationCap, projects: [{ company: "Cogna", title: "AI Journey", logo: cognaLogo.url }] },
  { name: "E-games", icon: Gamepad2 },
  {
    name: "Indústria",
    icon: Factory,
    projects: [
      { company: "BorgWarner", title: "Portal B2B", logo: borgwarnerLogo.url },
    ],
  },
  { name: "Financeiro", icon: Landmark },
  { name: "Saúde", icon: HeartPulse },
  { name: "Serviços", icon: Briefcase },
  { name: "Varejo", icon: ShoppingBag },
];

export const categories: Category[] = [
  "Segmentos",
  "Discovery & Design",
  "Agile Development",
  "Katalysis",
];

export const cases: CaseItem[] = [
  {
    id: "1",
    slug: "axia-agro",
    title: "App Protocolo de Engorda",
    company: "Axia Agro",
    segment: "Agro",
    category: "Agile Development",
    solution: "Super App de Nutrição Animal",
    method: "Discovery + Agile Development",
    description:
      "Solução digital gratuita que conecta consultores e produtores à oferta certa de nutrição animal, gerando mais de R$100 milhões em oportunidades.",
    tags: ["Agro", "Mobile App", "Nutrição Animal"],
    logo: axiaAgroLogo,
    coverImage:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "9",
    slug: "axia-agro-ia",
    title: "AI_Strategy",
    company: "Axia Agro",
    segment: "Agro",
    category: "Katalysis",
    solution: "Jornada Estratégica de IA",
    method: "Discovery + Roadmap de IA",
    description:
      "Construção da jornada de adoção de IA e roadmap de iniciativas com foco no real valor de negócios, priorizando oportunidades de maior impacto.",
    tags: ["IA", "Discovery", "Estratégia"],
    logo: axiaAgroLogo,
    coverImage: aiStrategyCover.url,
    coverPosition: "center 20%",
  },
  {
    id: "10",
    slug: "axia-agro-portal",
    title: "Portal Casa da Lavoura",
    company: "Axia Agro",
    segment: "Agro",
    category: "Segmentos",
    solution: "Portal externo no Experience Cloud",
    method: "Agile Development + Salesforce",
    description:
      "Portal de parceiros externo, amigável e integrado ao Salesforce, com cadastro digital que elimina retrabalho e padroniza a base de parceiros.",
    tags: ["Salesforce", "Experience Cloud", "Portal"],
    logo: axiaAgroLogo,
    coverImage: casaDaLavouraCover.url,
  },
  {
    id: "11",
    slug: "ale-cockpit-tatico",
    title: "AM&S Cockpit Tático",
    company: "ALE Combustíveis",
    segment: "Varejo",
    category: "Agile Development",
    solution: "Sustentação evolutiva N3",
    method: "Support Leader + pacote mensal de horas",
    description:
      "Modelo de sustentação evolutiva com Support Leader dedicado, reduzindo o Lead Time em 92,9% e aumentando em 70% os chamados resolvidos.",
    tags: ["Sustentação", "N3", "Support Leader", "AM&S", "Cockpit"],
    logo: aleLogo.url,
    coverImage: aleCover.url,
  },
  {
    id: "12",
    slug: "borgwarner-portal-b2b",
    title: "Portal B2B",
    company: "BorgWarner",
    segment: "Indústria",
    category: "Agile Development",
    solution: "Sistema de autosserviço B2B",
    method: "Agile Development + Integração ERP",
    description:
      "Plataforma de autosserviço que automatiza o pós-vendas de reposição de autopeças, com mais autonomia para distribuidores e integração total ao ERP.",
    tags: ["Portal B2B", "Pós-vendas", "ERP", "Indústria", "Autopeças"],
    logo: borgwarnerLogo.url,
    coverImage: borgwarnerCover.url,
  },
  {
    id: "13",
    slug: "cogna-ai-journey",
    title: "AI Journey",
    company: "Cogna",
    segment: "Educação",
    category: "Katalysis",
    extraCategories: ["Discovery & Design"],
    solution: "Jornada do aluno com IA",
    method: "Discovery & Design + Katalysis",
    description:
      "Mapeamento da jornada do aluno e cocriação do TO-BE com IA, automatizando o atendimento dos tutores e elevando retenção e engajamento.",
    tags: ["IA", "Educação", "Discovery", "Katalysis", "Jornada do aluno"],
    logo: cognaLogo.url,
    coverImage: cognaCover.url,
  },
];

