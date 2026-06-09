import { ArrowLeft, Target, Lightbulb, TrendingUp, DollarSign, ClipboardList, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { EatonCompanyHeader } from "@/components/EatonCompanyHeader";
import mockup from "@/assets/eaton-life-mockup.png.asset.json";

const bullets = [
  "Automatização do processo de propostas",
  "Previsibilidade de estoque com base em dados",
  "Integração com Power BI para decisões estratégicas",
];

const metrics = [
  { icon: DollarSign, value: "+10M", label: "em cotações elaboradas" },
  { icon: ClipboardList, value: "+180", label: "Propostas elaboradas" },
  { icon: Smartphone, value: "+1,4M", label: "Propostas ganhas no aplicativo" },
];

const CaseEatonLifeSafety = () => {
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
                  Simplificar o processo de envio de propostas, impulsionar a eficiência da equipe de
                  vendas e aumentar a taxa de conversão com previsibilidade.
                </p>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — Life Safety + Power BI</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Sistema focado em facilitar cotações no segmento Life Safety, com insights de dados
                  para decisões comerciais.
                </p>
                <ul className="mt-5 space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-base text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={mockup.url}
                alt="Eaton Life Safety — mockup tablet"
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
          {metrics.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated"
            >
              <Icon className="h-7 w-7 text-primary" />
              <p className="mt-4 text-3xl font-extrabold leading-none text-foreground">{value}</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
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

export default CaseEatonLifeSafety;
