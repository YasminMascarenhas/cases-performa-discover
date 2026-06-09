import { ArrowLeft, Target, Lightbulb, TrendingUp, Timer, TrendingDown, Gauge, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AleCompanyHeader } from "@/components/AleCompanyHeader";
import cockpitMockup from "@/assets/ale-cockpit.png.asset.json";

const results = [
  { icon: Timer, value: "92,9%", label: "de redução do Lead Time" },
  { icon: TrendingDown, value: "12 meses", label: "de queda contínua do Lead Time" },
  { icon: Gauge, value: "15,5x", label: "mais rápido que o ano anterior" },
  { icon: CheckCircle2, value: "+70%", label: "de aumento de chamados resolvidos" },
];

const CaseAleCockpit = () => {
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

      <AleCompanyHeader />

      {/* DESAFIO + SOLUÇÃO + MOCKUP */}
      <section className="bg-surface/50 border-y border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Desafio</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Melhorar a operação de suporte em <strong className="font-bold text-foreground">nível N3</strong> diante
                  de um <strong className="font-bold text-foreground">backlog elevado de chamados de evolução</strong>,
                  muitos deles antigos, com impacto direto na previsibilidade, na priorização e na
                  percepção de valor do suporte.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Estruturação de um modelo de <strong className="font-bold text-foreground">sustentação evolutiva</strong> com
                  pacote mensal de horas para correções e evoluções, liderado por um
                  <strong className="font-bold text-foreground"> Support Leader</strong> responsável pelo fluxo de ponta a ponta,
                  garantindo priorização contínua, agilidade e comunicação direta com o cliente.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-[480px] max-w-full">
                {/* Laptop mockup */}
                <div className="rounded-t-2xl border-[10px] border-b-[14px] border-zinc-800 bg-zinc-800 shadow-elevated">
                  <div className="overflow-hidden rounded-sm bg-white">
                    <img
                      src={cockpitMockup.url}
                      alt="AM&S Cockpit Tático — dashboard"
                      loading="lazy"
                      className="block h-auto w-full"
                    />
                  </div>
                </div>
                {/* Base */}
                <div className="relative mx-auto h-3 w-[110%] -translate-x-[5%] rounded-b-xl bg-gradient-to-b from-zinc-300 to-zinc-400 shadow-md">
                  <div className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-zinc-500/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="container mx-auto px-6 py-16">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Resultados</h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {results.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated"
              >
                <Icon className="h-7 w-7 text-primary" />
                <p className="mt-4 text-2xl font-bold leading-tight text-foreground">{value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{label}</p>
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

export default CaseAleCockpit;
