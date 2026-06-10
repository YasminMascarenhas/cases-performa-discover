import { ArrowLeft, Target, Lightbulb, TrendingUp, Rocket, Store, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { GpaCompanyHeader } from "@/components/GpaCompanyHeader";
import mockup from "@/assets/gpa-mockup.png.asset.json";

const results = [
  { icon: Rocket, label: "294 → 411 lojas operando com entregas próprias" },
  { icon: Store, label: "+117 Lojas com expansão da cobertura logística" },
  { icon: DollarSign, label: "5,2 Milhões de receita incremental (01/2025 a 08/2025)" },
];

const CaseGpaPlataformaLogistica = () => {
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
                  <strong className="font-bold text-foreground">Expandir rapidamente a operação de entregas próprias do GPA</strong>,{" "}
                  ampliando cobertura logística e melhorando a experiência do cliente, sem aumentar a complexidade tecnológica da plataforma.
                </p>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — Plataforma Logística</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <strong className="font-bold text-foreground">Integração com a Instaleap</strong>, substituindo o desenvolvimento in-house.
                  A parceria permitiu centralizar a conexão com múltiplos parceiros logísticos em um único ponto, acelerando a implementação e garantindo maior eficiência operacional.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={mockup.url}
                alt="GPA — Plataforma Logística (mockup laptop)"
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

export default CaseGpaPlataformaLogistica;
