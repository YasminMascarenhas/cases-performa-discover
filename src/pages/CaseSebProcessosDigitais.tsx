import { ArrowLeft, Target, Lightbulb, TrendingUp, Factory, ClipboardCheck, Settings, Wrench, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { SebCompanyHeader } from "@/components/SebCompanyHeader";

const deliverables = [
  {
    icon: Factory,
    title: "Fábrica de Motores",
    description:
      "Gestão das Linhas de Produção com Controle de Índices de Produtividade, Absenteísmo e Qualidade.",
  },
  {
    icon: ClipboardCheck,
    title: "Gestão de Testes",
    description:
      "Sistema de Acompanhamento e Gestão de Testes de Qualidade de Eletrodomésticos Integrado a Bancadas Inteligentes.",
  },
  {
    icon: Settings,
    title: "TPM",
    description:
      "Sistema Integrado de Gestão das Linhas de Produção para Controle de Tempos de Parada de Manutenção e o Impacto na produtividade.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description:
      "Gestão das Solicitações e Execuções das Paradas de Manutenção com Integração ao Módulo de PM do SAP.",
  },
  {
    icon: ShoppingCart,
    title: "Sales Center B2B",
    description:
      "Sistema de e-commerce B2B totalmente integrado com SAP incluindo cálculo de preço, carteira, negociação, colocação e distribuição de pedidos.",
  },
];

const CaseSebProcessosDigitais = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para todos os cases
        </Link>
      </div>

      <SebCompanyHeader />

      <section className="bg-surface border-y border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">Desafio</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                <strong className="font-bold text-foreground">Modernizar os processos industriais</strong>{" "}
                e garantir mais eficiência na gestão da produção e manutenção nas fábricas do Grupo SEB no Brasil.
              </p>
            </div>

            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Lightbulb className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — Processos Digitais Integrados</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                <strong className="font-bold text-foreground">Transformação da gestão industrial com soluções digitais integradas,</strong>{" "}
                aumentando a eficiência, reduzindo perdas e impulsionando a performance nas fábricas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">Entregas em destaque</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border bg-surface">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 py-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Performa IT. Todos os direitos reservados.
          </p>
          <p className="text-sm font-medium text-primary">o futuro, hoje.</p>
        </div>
      </footer>
    </div>
  );
};

export default CaseSebProcessosDigitais;
