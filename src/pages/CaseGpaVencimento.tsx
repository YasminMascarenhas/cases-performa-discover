import { ArrowLeft, Target, Lightbulb, TrendingUp, Zap, Rocket, Palette, Package, TrendingUp as TrendUp, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { GpaCompanyHeader } from "@/components/GpaCompanyHeader";
import mockup from "@/assets/gpa-vencimento-mockup.png.asset.json";

const pillars = [
  { icon: Zap, label: "Design Sprint" },
  { icon: Rocket, label: "Lean Inception" },
  { icon: Palette, label: "UX/UI" },
];

const results = [
  { icon: Package, label: "Redução de perdas com vencimento de estoque" },
  { icon: TrendUp, label: "Aumento na venda de produtos com desconto" },
  { icon: Star, label: "Experiência para o cliente" },
];

const CaseGpaVencimento = () => {
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
                  <strong className="font-bold text-foreground">Reduzir as perdas com produtos próximos ao vencimento,</strong>{" "}
                  que geravam impacto direto no faturamento da companhia.
                </p>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — Produtos Próximos ao Vencimento</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <strong className="font-bold text-foreground">Produtos próximos do vencimento ganharam destaque e ofertas no app,</strong>{" "}
                  com uma abordagem que combinou três frentes:
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {pillars.map(({ icon: Icon, label }) => (
                    <div key={label} className="rounded-xl border border-border bg-card p-4 shadow-soft">
                      <Icon className="h-6 w-6 text-primary" />
                      <p className="mt-3 text-sm font-semibold text-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={mockup.url}
                alt="GPA — Produtos Próximos ao Vencimento (mockup smartphones)"
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

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
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

export default CaseGpaVencimento;
