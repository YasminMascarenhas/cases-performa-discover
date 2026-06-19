import { ArrowLeft, Target, Lightbulb, TrendingUp, Users, ClipboardList, Landmark, Gem } from "lucide-react";
import { Link } from "react-router-dom";
import { JllCompanyHeader } from "@/components/JllCompanyHeader";
import workshopTeam from "@/assets/jll-workshop-team.png.asset.json";
import workshopBoard from "@/assets/jll-workshop-board.png.asset.json";

const results = [
  { icon: Target, label: "80 NPS do Workshop" },
  { icon: Users, label: "Engajamento real das lideranças" },
  { icon: ClipboardList, label: "Roteiro claro para implementação e escala de iniciativas na América Latina" },
  { icon: Landmark, label: "Modelo de governança co-criada e aprovado" },
  { icon: Gem, label: "Time mais alinhado com foco em valor" },
];

const CaseJllWorkshopColaborativo = () => {
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

      <JllCompanyHeader />

      <section className="bg-surface border-y border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-10">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Desafio</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Fortalecer a autonomia dos times e alinhar estratégia e operação para destravar o crescimento e reduzir a sobrecarga da liderança.
                </p>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — Workshop Colaborativo</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <strong className="font-bold text-foreground">Workshop colaborativo com lideranças,</strong>{" "}
                  estruturando um modelo de governança ágil e conectando estratégia à execução com foco em autonomia e entrega de valor.
                </p>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />Estruturação de OKRs</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />Criação de modelo de governança ágil</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />Narrativas futuristas + Solution Cards</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={workshopBoard.url}
                alt="JLL — Quadro de Workshop"
                className="w-full max-h-[600px] rounded-2xl object-contain shadow-elevated"
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

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
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

export default CaseJllWorkshopColaborativo;
