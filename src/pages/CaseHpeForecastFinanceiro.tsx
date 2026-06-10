import { ArrowLeft, Target, Lightbulb, TrendingUp, ShieldCheck, Lightbulb as Idea, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { HpeCompanyHeader } from "@/components/HpeCompanyHeader";
import sideImage from "@/assets/hpe-mockup.png.asset.json";

const results = [
  { icon: TrendingUp, label: "+85% de acuracidade para oportunidades com alta probabilidade de fechamento" },
  { icon: ShieldCheck, label: "Decisões comerciais com mais segurança" },
  { icon: Idea, label: "Foco em oportunidades que antes passavam despercebidas" },
  { icon: BarChart3, label: "Previsões mais confiáveis e ágeis" },
];

const CaseHpeForecastFinanceiro = () => {
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

      <HpeCompanyHeader />

      <section className="bg-surface border-y border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-10">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Desafio</h2>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />O forecast financeiro dependia do feeling dos vendedores</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />+3 anos de dados no Salesforce pouco explorados</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />Risco de quebra no forecast trimestral</li>
                </ul>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — IA sob medida integrada ao Salesforce</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <strong className="font-bold text-foreground">Combinamos AI Sprint e AI Strategy para criar uma IA sob medida.</strong>{" "}
                  Treinada com mais de 3 anos de dados reais, foi integrada ao Salesforce para gerar previsões ágeis e confiáveis. A solução evolui continuamente, tornando as decisões comerciais mais precisas e acionáveis.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={sideImage.url}
                alt="HPE — IA para Forecast Financeiro"
                className="max-h-[520px] w-full object-contain"
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

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

export default CaseHpeForecastFinanceiro;
