import { ArrowLeft, Target, Lightbulb, TrendingUp, Clock, TrendingUp as TrendUp, Settings, Lightbulb as Bulb, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { CognaCompanyHeader } from "@/components/CognaCompanyHeader";
import mockup from "@/assets/cogna-mockup.png.asset.json";

const solutionItems = [
  "Mapear a jornada atual (AS-IS) com visão de ponta a ponta",
  "Identificar gaps e pontos críticos",
  "Cocriar a jornada ideal (TO-BE) com uso da IA",
  "Estruturar fluxos inteligentes de comunicação e atendimento, automatizando tarefas operacionais e promovendo personalização",
];

const results = [
  { icon: Clock, label: "Redução no tempo médio de atendimento ao aluno" },
  { icon: TrendUp, label: "Aumento da retenção" },
  { icon: Settings, label: "Otimização da jornada de trabalho dos tutores" },
  { icon: Bulb, label: "Maior clareza sobre o papel dos dados e da IA na jornada do aluno" },
  { icon: Bot, label: "Da operação reativa para a inteligência preditiva" },
];

const CaseCognaAIJourney = () => {
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

      <CognaCompanyHeader />

      {/* DESAFIO + SOLUÇÃO */}
      <section className="bg-surface border-y border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">Desafio</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                <strong className="font-bold text-foreground">Transformar a jornada do aluno com IA</strong>,
                aumentando a retenção, garantindo mentorias mais eficazes e maior engajamento através de
                um atendimento excepcional dos tutores impulsionados pela Inteligência Artificial.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Lightbulb className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — AI Journey</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Combinação de <strong className="font-bold text-foreground">metodologias ágeis, design estratégico e ferramentas validadas no mercado</strong> para:
              </p>
              <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
                {solutionItems.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
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

      {/* MOCKUP */}
      <section className="bg-surface border-t border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <img
              src={mockup.url}
              alt="Mockup AI Journey Cogna"
              className="w-full h-auto"
            />
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

export default CaseCognaAIJourney;
