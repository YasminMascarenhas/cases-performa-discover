import { ArrowLeft, Target, Lightbulb, TrendingUp, Handshake, Settings, LineChart, RefreshCw, Crosshair, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import { EatonCompanyHeader } from "@/components/EatonCompanyHeader";
import mockup from "@/assets/eaton-blue-guardian-mockup.png.asset.json";

const results = [
  { icon: Handshake, label: "Maior confiabilidade" },
  { icon: Settings, label: "Agilidade nas decisões" },
  { icon: LineChart, label: "Previsões assertivas" },
  { icon: RefreshCw, label: "Redução de retrabalho" },
  { icon: Crosshair, label: "Maior autonomia" },
  { icon: LayoutGrid, label: "Visão integrada e estratégica" },
];

const CaseEatonBlueGuardian = () => {
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

      <EatonCompanyHeader />

      <section className="bg-surface border-y border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-10">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Desafio</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <strong className="font-bold text-foreground">Oferecer ao time de vendas estimativas mais precisas, rápidas e inteligentes</strong>,
                  fortalecendo a tomada de decisão com uma previsão comercial baseada em dados históricos e tendências de mercado.
                </p>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — Blue Guardian</h2>
                <p className="mt-2 text-sm font-semibold text-primary">IA preditiva para Forecast Financeiro</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <strong className="font-bold text-foreground">Plataforma inteligente com análise preditiva</strong> baseada em dados históricos
                  e variações sazonais, trazendo automação e insights em tempo real para apoio estratégico do time de vendas.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={mockup.url}
                alt="Eaton Blue Guardian — mockup"
                className="max-h-[600px] w-auto object-contain"
              />
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

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated"
            >
              <Icon className="h-7 w-7 text-primary" />
              <p className="mt-4 text-base font-semibold leading-snug text-foreground">{label}</p>
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

export default CaseEatonBlueGuardian;
