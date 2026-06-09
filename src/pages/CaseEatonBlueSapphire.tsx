import { ArrowLeft, Target, Lightbulb, TrendingUp, CheckCircle2, Rocket, FileSpreadsheet, ClipboardList, Trophy, Package, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { EatonCompanyHeader } from "@/components/EatonCompanyHeader";
import mockup from "@/assets/eaton-mockup.png.asset.json";

const results = [
  { icon: TrendingUp, label: "Aumento de taxas de conversão e receitas" },
  { icon: CheckCircle2, label: "Redução de erro humano" },
  { icon: Rocket, label: "Mais agilidade e mais propostas enviadas" },
  { icon: FileSpreadsheet, label: "Redução do uso de planilhas no Excel" },
];

const metrics = [
  { icon: ClipboardList, value: "+800%", label: "Propostas elaboradas" },
  { icon: Trophy, value: "+150%", label: "Propostas ganhas" },
  { icon: Package, value: "+50%", label: "Volume de propostas elaboradas" },
  { icon: FolderOpen, value: "+1250", label: "Produtos cadastrados" },
];

const tags = ["Power Apps", "Power BI", "Automação", "Cotações", "Agile Development"];

const CaseEatonBlueSapphire = () => {
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
                  <strong className="font-bold text-foreground">Mais agilidade e menos erros no fechamento de propostas e cotações</strong>,
                  automatizando o que antes era manual.
                </p>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — Eaton Blue Sapphire</h2>
                <p className="mt-2 text-sm font-semibold text-primary">Power Apps + Power BI</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <strong className="font-bold text-foreground">Sistema para elaboração de cotações e propostas</strong> com{" "}
                  <strong className="font-bold text-foreground">80% de melhoria no tempo de criação de proposta</strong> —
                  de 15min antes para 3min depois.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={mockup.url}
                alt="Eaton Blue Sapphire — mockup"
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

        <div className="mt-12">
          <h3 className="text-xl font-bold text-foreground">Em 4 meses</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

export default CaseEatonBlueSapphire;
