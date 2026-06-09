import { ArrowLeft, Target, Lightbulb, TrendingUp, ClipboardCheck, Timer, Users, MessageCircle, Search, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { CrodaCompanyHeader } from "@/components/CrodaCompanyHeader";
import mockup from "@/assets/croda-mockup.png.asset.json";

const results = [
  { icon: ClipboardCheck, label: "100% customizado" },
  { icon: Timer, label: "Otimização de tempo" },
  { icon: Users, label: "+300 usuários" },
  { icon: MessageCircle, label: "Processos mais simples" },
  { icon: Search, label: "Rastreabilidade e histórico centralizados" },
  { icon: RefreshCw, label: "Redução de retrabalho" },
];

const tags = ["Design Thinking", "Service Design", "Product Design", "Desenvolvimento", "Sustentação"];

const CaseCrodaPlataforma = () => {
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

      <CrodaCompanyHeader />

      <section className="bg-surface border-y border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-10">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Desafio</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <strong className="font-bold text-foreground">Processo lento, burocrático e sem visibilidade</strong>,
                  dificultando o monitoramento de status ligados às pesquisas científicas. Não existia
                  uma solução pronta que atendesse suas necessidades, e adaptar um ERP seria caro e demorado.
                </p>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — Plataforma Digital</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <strong className="font-bold text-foreground">Solução sob medida</strong> com um sistema
                  com regras, aprovações e rastreabilidade para gerenciar eventos de curto e longo prazo,
                  centralizando as informações de forma simples e eficiente.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img
                src={mockup.url}
                alt="Mockup Plataforma Digital Croda"
                loading="lazy"
                className="h-auto w-full max-w-sm object-contain"
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

export default CaseCrodaPlataforma;
