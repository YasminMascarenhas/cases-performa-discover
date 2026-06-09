import { ArrowLeft, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { AxiaAgroCompanyHeader } from "@/components/AxiaAgroCompanyHeader";
import teamPhoto from "@/assets/axia-ia-team.jpg";
import funnelImage from "@/assets/axia-ia-funnel.png";

const NpsGauge = () => (
  <svg viewBox="0 0 120 80" className="h-20 w-28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M10 70 A50 50 0 0 1 110 70" />
    {Array.from({ length: 9 }).map((_, i) => {
      const angle = Math.PI - (Math.PI * (i + 1)) / 10;
      const x1 = 60 + Math.cos(angle) * 40;
      const y1 = 70 - Math.sin(angle) * 40;
      const x2 = 60 + Math.cos(angle) * 50;
      const y2 = 70 - Math.sin(angle) * 50;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
    })}
    <circle cx="48" cy="55" r="3" fill="currentColor" stroke="none" />
    <circle cx="72" cy="55" r="3" fill="currentColor" stroke="none" />
    <path d="M46 64 Q60 76 74 64" />
  </svg>
);

const CaseAxiaAgroIA = () => {
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

      <AxiaAgroCompanyHeader />

      {/* DESAFIO + SOLUÇÃO + MOCKUP */}
      <section className="bg-surface border-y border-border">
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
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução</h2>
                <p className="mt-4 text-base font-bold text-foreground">Jornada Estratégica de IA</p>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  Estratégia bem construída e <strong className="font-bold text-foreground">amplificada pela IA</strong> para descobrir e priorizar as <strong className="font-bold text-foreground">oportunidades de maior impacto</strong> para o negócio.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={teamPhoto}
                alt="Equipe Axia Agro em workshop de estratégia de IA"
                loading="lazy"
                className="h-auto w-[420px] max-w-full rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">Resultados</h2>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* OKRs */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated">
            <p className="text-4xl font-extrabold leading-none text-primary md:text-5xl">100% OKRs</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              priorizados com oportunidades mapeadas para serem acelerados com projetos de IA
            </p>
          </div>

          {/* Funil */}
          <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated">
            <img
              src={funnelImage}
              alt="Funil: +100 necessidades, +70 ideias, 10 classificadas, 03 projetos priorizados"
              className="h-auto w-full max-w-[440px]"
            />
          </div>

          {/* NPS */}
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated">
            <div className="text-primary">
              <NpsGauge />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avaliação NPS</p>
              <p className="text-5xl font-extrabold leading-none text-foreground">100</p>
            </div>
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
