import { ArrowLeft, Target, Lightbulb, TrendingUp, Map, Search, Layers, FlaskConical, Rocket, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { GpaCompanyHeader } from "@/components/GpaCompanyHeader";
import mockup from "@/assets/gpa-cliente-mais-v2-mockup.png.asset.json";

const steps = [
  { icon: Map, label: "Mapeamento da jornada completa do cliente" },
  { icon: Search, label: "Benchmarking" },
  { icon: Layers, label: "Prototipação em Alta Qualidade" },
  { icon: FlaskConical, label: "Testes" },
  { icon: Rocket, label: "Implementação" },
];

const CaseGpaProgramaClienteMais = () => {
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
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-10">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Desafio</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <strong className="font-bold text-foreground">Melhorar a experiência do cliente dentro do aplicativo</strong>{" "}
                  e desenvolver uma nova funcionalidade com foco em gerar valor e apoiar o crescimento do negócio.
                </p>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — Programa Cliente Mais</h2>
                <ul className="mt-5 space-y-3">
                  {steps.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                      <Icon className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-semibold text-foreground">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={mockup.url}
                alt="GPA — Programa Cliente Mais (mockups smartphone)"
                className="max-h-[640px] w-auto object-contain"
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

        <p className="mt-6 text-base font-semibold text-foreground">Aumento expressivo no tráfego do app</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated">
            <Smartphone className="h-7 w-7 text-primary" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Pão de Açúcar</p>
            <p className="mt-2 text-2xl font-bold text-foreground">21,4% → <span className="text-primary">78,6%</span></p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated">
            <Smartphone className="h-7 w-7 text-primary" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Clube Extra</p>
            <p className="mt-2 text-2xl font-bold text-foreground">22,5% → <span className="text-primary">77,5%</span></p>
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

export default CaseGpaProgramaClienteMais;
