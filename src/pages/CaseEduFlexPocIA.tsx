import { ArrowLeft, Target, Lightbulb, TrendingUp, UserCog, ClipboardCheck, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { EduFlexCompanyHeader } from "@/components/EduFlexCompanyHeader";
import mockup from "@/assets/eduflex-mockup.png.asset.json";

const steps = [
  "Professor(a) seleciona o(a) estudante e a matéria",
  "Faz o upload da atividade",
  "IA adapta o conteúdo de forma personalizada",
  "Material gerado editável e pronto para uso em sala de aula",
];

const results = [
  { icon: UserCog, label: "Redução da sobrecarga docente" },
  { icon: ClipboardCheck, label: "Maior assertividade na adaptação de conteúdo" },
  { icon: Users, label: "Inclusão mais acessível e escalável" },
  { icon: Sparkles, label: "IA útil, prática e aplicável" },
];

const CaseEduFlexPocIA = () => {
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

      <EduFlexCompanyHeader />

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
                  <strong className="font-bold text-foreground">Adaptar atividades escolares para atender estudantes com diferentes perfis de aprendizagem</strong>{" "}
                  (alunos com TEA, TDAH e outras neurodivergências), de forma prática, acessível e em escala.
                </p>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — POC com IA</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <strong className="font-bold text-foreground">POC com IA que adapta atividades ao perfil do estudante</strong>,
                  com critérios cognitivos e sensoriais. Como funciona:
                </p>
                <ol className="mt-4 space-y-2">
                  {steps.map((s, i) => (
                    <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-sm font-semibold text-primary">
                  Adaptação guiada por critérios cognitivos e alinhamento à BNCC
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={mockup.url}
                alt="EduFlex — mockup tablet"
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

export default CaseEduFlexPocIA;
