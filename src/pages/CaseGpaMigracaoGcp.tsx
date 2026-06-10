import { ArrowLeft, Target, Lightbulb, TrendingUp, Gauge, Database, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { GpaCompanyHeader } from "@/components/GpaCompanyHeader";


const resultGroups = [
  {
    icon: Gauge,
    title: "Performance & Produtividade",
    items: [
      { value: "+12%", label: "Aumento de produtividade" },
      { value: "+59%", label: "Performance e Alocação de Pedidos" },
      { value: "~5%", label: "Variação do velocity" },
    ],
  },
  {
    icon: Database,
    title: "Volume Migrado",
    items: [
      { value: "4.223", label: "Componentes migrados (100%)" },
      { value: "+400", label: "Features e correções entregues" },
      { value: "20TB", label: "Volume de dados migrados" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Estabilidade e Qualidade",
    items: [
      { value: "ZERO", label: "Instabilidades ou downtime pós-migração e novos bugs em produção" },
    ],
  },
];

const CaseGpaMigracaoGcp = () => {
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

      <GpaCompanyHeader />

      <section className="bg-surface border-y border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">Desafio</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                <strong className="font-bold text-foreground">Modernizar o ecossistema de tecnologia do GPA.</strong>
              </p>
            </div>

            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Lightbulb className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — Migração para GCP</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                <strong className="font-bold text-foreground">Migração da estrutura para a AWS com zero impacto em produção,</strong>{" "}
                com maior estabilidade, melhor desempenho e visibilidade técnica em 14 dias.
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
          <h2 className="text-3xl font-bold text-foreground">Resultados</h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {resultGroups.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
              </div>
              <div className="mt-5 space-y-4">
                {items.map(({ value, label }) => (
                  <div key={label} className="border-l-2 border-primary pl-4">
                    <p className="text-2xl font-bold text-primary">{value}</p>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
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

export default CaseGpaMigracaoGcp;
