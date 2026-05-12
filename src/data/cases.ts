export type Category = "Segmentos" | "Discovery & Design" | "Agile Development" | "Katalysis";

export interface CaseItem {
  id: string;
  slug?: string;
  title: string;
  company: string;
  category: Category;
  solution: string;
  method: string;
  description: string;
  tags: string[];
  coverImage?: string;
  logo?: string;
}

import { Sprout, GraduationCap, Gamepad2, Factory, Landmark, HeartPulse, Briefcase, ShoppingBag, type LucideIcon } from "lucide-react";
import axiaAgroLogo from "@/assets/axia-agro-logo.png";
import yaraLogo from "@/assets/yara-logo.png";
import eurochemLogo from "@/assets/eurochem-logo.png";


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
  { name: "Educação", icon: GraduationCap },
  { name: "E-games", icon: Gamepad2 },
  { name: "Indústria", icon: Factory },
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
    category: "Katalysis",
    solution: "Jornada Estratégica de IA",
    method: "Discovery + Roadmap de IA",
    description:
      "Construção da jornada de adoção de IA e roadmap de iniciativas com foco no real valor de negócios, priorizando oportunidades de maior impacto.",
    tags: ["IA", "Discovery", "Estratégia"],
    logo: axiaAgroLogo,
    coverImage:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "10",
    slug: "axia-agro-portal",
    title: "Portal Casa da Lavoura",
    company: "Axia Agro",
    category: "Agile Development",
    solution: "Portal externo no Experience Cloud",
    method: "Agile Development + Salesforce",
    description:
      "Portal de parceiros externo, amigável e integrado ao Salesforce, com cadastro digital que elimina retrabalho e padroniza a base de parceiros.",
    tags: ["Salesforce", "Experience Cloud", "Portal"],
    logo: axiaAgroLogo,
    coverImage:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "2",
    title: "Discovery de Produto para Seguros Digitais",
    company: "Porto Seguro",
    category: "Discovery & Design",
    solution: "Discovery & Design Sprint",
    method: "Design Thinking + Lean UX",
    description:
      "Mapeamento de jornada e prototipação de novo produto digital para o segmento de seguros residenciais com validação junto a 120 usuários.",
    tags: ["Pesquisa", "Prototipação", "User Research"],
  },
  {
    id: "3",
    title: "Katalysis IA para Operações de Crédito",
    company: "Sicredi",
    category: "Katalysis",
    solution: "IA Generativa aplicada",
    method: "RAG + LLMs proprietários",
    description:
      "Implantação de copiloto de IA para análise de crédito, automatizando triagem documental e gerando insights em tempo real.",
    tags: ["IA Generativa", "RAG", "Automação"],
  },
  {
    id: "4",
    title: "Modernização Core Bancário",
    company: "BV Financeira",
    category: "Segmentos",
    solution: "Modernização legada",
    method: "Strangler Pattern + APIs",
    description:
      "Migração faseada de mainframe para arquitetura cloud-first com zero downtime e ganho de 60% em performance transacional.",
    tags: ["Cloud", "API First", "Refactoring"],
  },
  {
    id: "5",
    title: "Design System Corporativo",
    company: "Raia Drogasil",
    category: "Discovery & Design",
    solution: "Design System",
    method: "Atomic Design + Tokens",
    description:
      "Construção de design system unificado para 12 produtos digitais, acelerando entregas em 3x e padronizando a experiência.",
    tags: ["Design System", "Acessibilidade", "Tokens"],
  },
  {
    id: "6",
    title: "Squad Ágil para E-commerce B2B",
    company: "Tigre",
    category: "Agile Development",
    solution: "Squad full-stack",
    method: "Kanban + CI/CD",
    description:
      "Squad multidisciplinar dedicado à evolução do e-commerce B2B, com releases semanais e crescimento de 38% no GMV.",
    tags: ["E-commerce", "B2B", "CI/CD"],
  },
  {
    id: "7",
    title: "Assistente Inteligente de RH",
    company: "Vale",
    category: "Katalysis",
    solution: "Chatbot com IA",
    method: "NLP + LLM Fine-tuning",
    description:
      "Assistente conversacional para autoatendimento de colaboradores, resolvendo 72% das demandas sem intervenção humana.",
    tags: ["NLP", "Chatbot", "Self-service"],
  },
  {
    id: "8",
    title: "Transformação Digital Corporativa",
    company: "Grupo Pão de Açúcar",
    category: "Segmentos",
    solution: "Transformação digital",
    method: "Agile at Scale + OKRs",
    description:
      "Programa multianual de transformação digital com reestruturação de tribos, métricas e cultura orientada a produto.",
    tags: ["Cultura", "Tribos", "OKRs"],
  },
];
