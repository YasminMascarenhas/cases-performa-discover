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
import crodaLogo from "@/assets/croda-logo.png.asset.json";
import crodaCover from "@/assets/croda-cover.png.asset.json";
import eatonLogo from "@/assets/eaton-logo.png.asset.json";
import eatonCover from "@/assets/eaton-cover.png.asset.json";
import eatonLifeCover from "@/assets/eaton-life-cover.png.asset.json";
import eatonPortoFelizCover from "@/assets/eaton-porto-feliz-cover.png.asset.json";
import eatonBlueGuardianCover from "@/assets/eaton-blue-guardian-cover.png.asset.json";
import eduflexLogo from "@/assets/eduflex-logo.png.asset.json";
import eduflexCover from "@/assets/eduflex-cover.jpg.asset.json";
import eurochemLogoSvg from "@/assets/eurochem-logo.svg.asset.json";
import eurochemCaseCover from "@/assets/eurochem-cover.png.asset.json";
import gpaLogo from "@/assets/gpa-logo.png.asset.json";
import gpaCover from "@/assets/gpa-cover.png.asset.json";
import gpaClienteMaisCover from "@/assets/gpa-cliente-mais-cover.png.asset.json";
import gpaGamificationCover from "@/assets/gpa-gamification-cover.png.asset.json";




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
  { name: "Educação", icon: GraduationCap, projects: [{ company: "Cogna", title: "AI Journey", logo: cognaLogo.url }, { company: "EduFlex", title: "POC IA Educação Inclusiva", logo: eduflexLogo.url }] },
  { name: "E-games", icon: Gamepad2 },
  {
    name: "Indústria",
    icon: Factory,
    projects: [
      { company: "BorgWarner", title: "Portal B2B", logo: borgwarnerLogo.url },
      { company: "Continental", title: "Portal Web SAP", logo: continentalLogo.url },
      { company: "Croda", title: "Plataforma Digital", logo: crodaLogo.url },
      { company: "Eaton", title: "Blue Sapphire CPDI", logo: eatonLogo.url },
      { company: "Eaton", title: "Life Safety + Power BI", logo: eatonLogo.url },
      { company: "Eaton", title: "Porto Feliz Power Systems", logo: eatonLogo.url },
      { company: "Eaton", title: "Blue Guardian", logo: eatonLogo.url },
    ],
  },
  { name: "Financeiro", icon: Landmark },
  { name: "Saúde", icon: HeartPulse },
  { name: "Serviços", icon: Briefcase },
  { name: "Varejo", icon: ShoppingBag, projects: [{ company: "GPA", title: "Plataforma Logística", logo: gpaLogo.url }, { company: "GPA", title: "Precificação Justa", logo: gpaLogo.url }, { company: "GPA", title: "Gamification Design", logo: gpaLogo.url }] },
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
    category: "Segmentos",
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
  {
    id: "14",
    slug: "continental-portal-sap",
    title: "Portal Web SAP",
    company: "Continental",
    segment: "Indústria",
    category: "Segmentos",
    solution: "Portal Web integrado ao SAP",
    method: "Agile Development + .NET Core",
    description:
      "Gestão de pedidos do início ao fim, com informações em tempo real e mais autonomia para clientes e equipe de vendas, integrada ao SAP.",
    tags: ["Portal Cliente", ".NET Core", "Integração SAP", "E-commerce B2B"],
    logo: continentalLogo.url,
    coverImage: continentalCover.url,
  },
  {
    id: "15",
    slug: "croda-plataforma-digital",
    title: "Plataforma Digital",
    company: "Croda",
    segment: "Indústria",
    category: "Agile Development",
    solution: "Plataforma sob medida",
    method: "Design Thinking + Agile Development",
    description:
      "Solução sob medida com regras, aprovações e rastreabilidade para gerenciar eventos de curto e longo prazo ligados às pesquisas científicas.",
    tags: ["Design Thinking", "Service Design", "Product Design", "Desenvolvimento", "Sustentação"],
    logo: crodaLogo.url,
    coverImage: crodaCover.url,
  },
  {
    id: "16",
    slug: "eaton-blue-sapphire",
    title: "Blue Sapphire CPDI",
    company: "Eaton",
    segment: "Indústria",
    category: "Agile Development",
    solution: "Power Apps + Power BI",
    method: "Agile Development + Automação",
    description:
      "Sistema para elaboração de cotações e propostas com 80% de melhoria no tempo de criação — de 15min para 3min, com mais agilidade e menos erros.",
    tags: ["Power Apps", "Power BI", "Automação", "Cotações"],
    logo: eatonLogo.url,
    coverImage: eatonCover.url,
  },
  {
    id: "17",
    slug: "eaton-life-safety",
    title: "Life Safety + Power BI",
    company: "Eaton",
    segment: "Indústria",
    category: "Agile Development",
    solution: "Life Safety + Power BI",
    method: "Agile Development + Power BI",
    description:
      "Sistema focado em facilitar cotações no segmento Life Safety, com insights de dados para decisões comerciais e mais previsibilidade.",
    tags: ["Life Safety", "Power BI", "Cotações", "Indústria"],
    logo: eatonLogo.url,
    coverImage: eatonLifeCover.url,
  },
  {
    id: "18",
    slug: "eaton-porto-feliz",
    title: "Porto Feliz Power Systems",
    company: "Eaton",
    segment: "Indústria",
    category: "Agile Development",
    extraCategories: ["Discovery & Design"],
    solution: "Power Systems + Power BI",
    method: "Agile Development + Power BI",
    description:
      "Aplicativo para gestão de propostas comerciais com automação de processos e mais autonomia para os usuários da planta de Porto Feliz.",
    tags: ["Power Systems", "Power BI", "Cotações", "Indústria"],
    logo: eatonLogo.url,
    coverImage: eatonPortoFelizCover.url,
  },
  {
    id: "19",
    slug: "eaton-blue-guardian",
    title: "Blue Guardian",
    company: "Eaton",
    segment: "Indústria",
    category: "Agile Development",
    extraCategories: ["Discovery & Design"],
    solution: "IA preditiva para Forecast Financeiro",
    method: "Agile Development + IA",
    description:
      "Plataforma inteligente com análise preditiva baseada em dados históricos e variações sazonais, com automação e insights em tempo real para o time de vendas.",
    tags: ["IA Preditiva", "Forecast", "Vendas", "Indústria"],
    logo: eatonLogo.url,
    coverImage: eatonBlueGuardianCover.url,
  },
  {
    id: "20",
    slug: "eduflex-poc-ia",
    title: "POC IA Educação Inclusiva",
    company: "EduFlex",
    segment: "Educação",
    category: "Katalysis",
    solution: "POC com IA para adaptação de atividades",
    method: "Katalysis + IA aplicada à BNCC",
    description:
      "POC com IA que adapta atividades escolares ao perfil cognitivo e sensorial de cada estudante, apoiando professores em inclusão e personalização.",
    tags: ["IA", "Educação Inclusiva", "BNCC", "POC", "Katalysis"],
    logo: eduflexLogo.url,
    coverImage: eduflexCover.url,
  },
  {
    id: "21",
    slug: "eurochem-ta-na-mao",
    title: "Portal Tá na Mão",
    company: "EuroChem",
    segment: "Agro",
    category: "Agile Development",
    solution: "Sistema Multicanal para clientes",
    method: "Agile Development + Portal Multicanal",
    description:
      "Portal Tá na Mão: sistema multicanal que dá mais autonomia e transparência aos clientes EuroChem na gestão de pedidos, entregas e pagamentos.",
    tags: ["Portal Cliente", "Multicanal", "Agro", "Pedidos", "Rastreabilidade"],
    logo: eurochemLogoSvg.url,
    coverImage: eurochemCaseCover.url,
  },
  {
    id: "22",
    slug: "gpa-plataforma-logistica",
    title: "Plataforma Logística",
    company: "GPA",
    segment: "Varejo",
    category: "Segmentos",
    solution: "Integração com Instaleap",
    method: "Discovery & Design + Integração Logística",
    description:
      "Integração com a Instaleap para expandir as entregas próprias do GPA, ampliando cobertura logística e gerando R$ 5,2 milhões de receita incremental.",
    tags: ["Varejo", "Logística", "Instaleap", "Entregas", "Discovery"],
    logo: gpaLogo.url,
    coverImage: gpaCover.url,
  },
  {
    id: "23",
    slug: "gpa-cliente-mais",
    title: "Precificação Justa",
    company: "GPA",
    segment: "Varejo",
    category: "Discovery & Design",
    solution: "Cobrança e comunicação de peso variável",
    method: "Discovery & Design + Redesign App/WhatsApp",
    description:
      "Programa que transforma a experiência de compra de itens com peso variável, com cobrança justa e comunicação clara — gerando R$ 539k de receita em 66 dias.",
    tags: ["Varejo", "Peso variável", "App", "WhatsApp", "Discovery"],
    logo: gpaLogo.url,
    coverImage: gpaClienteMaisCover.url,
  },
  {
    id: "24",
    slug: "gpa-gamification",
    title: "Gamification Design",
    company: "GPA",
    segment: "Varejo",
    category: "Discovery & Design",
    solution: "Gamification Design em 3 etapas",
    method: "Discovery + Design Sprint + Prototyping",
    description:
      "Processo ágil e colaborativo para compreender a jornada dos entregadores do GPA e engajá-los por meio da gamificação no app.",
    tags: ["Varejo", "Gamification", "Design Sprint", "Discovery", "Prototyping"],
    logo: gpaLogo.url,
    coverImage: gpaGamificationCover.url,
  },
];


