import { ArrowLeft, Target, Lightbulb, TrendingUp, BarChart3, Lightbulb as Idea, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { AxiaAgroCompanyHeader } from "@/components/AxiaAgroCompanyHeader";

const results = [
  {
    icon: BarChart3,
    value: "100% OKRs",
    label: "priorizados com oportunidades mapeadas para serem acelerados com projetos de IA",
  },
  {
    icon: Idea,
    value: "+100 → +70 → 10 → 03",
    label: "Necessidades levantadas, ideias geradas, ideias classificadas e projetos priorizados",
  },
  {
    icon: Star,
    value: "NPS 100",
    label: "Avaliação do processo pelos participantes",
  },
];

const CaseAxiaAgroIA = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para todos os cases
        </Link>
      </div>

      <AxiaAgroCompanyHeader />

      {/* DESAFIO + SOLUÇÃO + MOCKUP */}
      <section className="bg-surface/50 border-y border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Desafio</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Construir a <strong className="font-bold text-foreground">jornada de adoção da Inteligência Artificial</strong> na empresa e um <strong className="font-bold text-foreground">roadmap de iniciativas</strong> com foco no real valor de negócios.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — Jornada Estratégica de IA</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Estratégia bem construída e <strong className="font-bold text-foreground">amplificada pela IA</strong> para descobrir e priorizar as <strong className="font-bold text-foreground">oportunidades de maior impacto</strong> para o negócio.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                alt="Workshop de estratégia de IA em laptop"
                loading="lazy"
                className="h-auto w-[420px] max-w-full rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="container mx-auto px-6 py-16">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Resultados</h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {results.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated"
              >
                <Icon className="h-7 w-7 text-primary" />
                <p className="mt-4 text-2xl font-bold leading-tight text-foreground">{value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
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

export default CaseAxiaAgroIA;
