import { ArrowLeft, Target, Lightbulb, TrendingUp, Map, Package, Handshake, Cloud, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { BorgWarnerCompanyHeader } from "@/components/BorgWarnerCompanyHeader";


const results: { icon: typeof Map; label: string; highlight?: string }[] = [
  { icon: Map, label: "Maior alcance e distribuição" },
  { icon: Package, label: "Melhor acompanhamento de estoque e entregas" },
  { icon: Handshake, label: "Agilidade no atendimento ao cliente em canal exclusivo" },
  { icon: Cloud, label: "integrada ao ERP", highlight: "100%" },
  { icon: Settings, label: "Escala na operação de vendas de reposição de peças" },
];

const CaseBorgWarnerPortal = () => {
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

      <BorgWarnerCompanyHeader />

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
                Automatização de processos de pós-vendas para o mercado de reposição do autopeças, com
                <strong className="font-bold text-foreground"> operação manual, complexidade alta, falta de visibilidade</strong> e
                ausência de integração entre sistemas.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Lightbulb className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — Portal B2B</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                <strong className="font-bold text-foreground">Sistema de autosserviço estável</strong>: a nova plataforma expande
                o setor de pós-vendas, garantindo mais autonomia e eficiência para distribuidores.
              </p>
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
          {results.map(({ icon: Icon, label, highlight }) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated"
            >
              <Icon className="h-7 w-7 text-primary" />
              {highlight && (
                <p className="mt-4 text-3xl font-bold leading-none text-primary">{highlight}</p>
              )}
              <p className={`${highlight ? "mt-2" : "mt-4"} text-base font-semibold leading-snug text-foreground`}>{label}</p>
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

export default CaseBorgWarnerPortal;
