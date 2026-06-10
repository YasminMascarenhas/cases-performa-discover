import { ArrowLeft, Target, Lightbulb, TrendingUp, Scale, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { GpaCompanyHeader } from "@/components/GpaCompanyHeader";
import mockup from "@/assets/gpa-cliente-mais-mockup.png.asset.json";

const pilotResults = [
  { icon: Scale, label: "609kg de quebra evitada" },
  { icon: DollarSign, label: "R$ 7.300 de receita" },
];

const rolloutResults = [
  { icon: Scale, label: "25.179kg de quebra evitada" },
  { icon: DollarSign, label: "R$ 539.000 de receita" },
];

const CaseGpaClienteMais = () => {
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
                  <strong className="font-bold text-foreground">Transformar a experiência de compra de itens com peso variável</strong>,{" "}
                  com um modelo de precificação justo e alinhado à operação logística e financeira.
                </p>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — Programa Cliente Mais</h2>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span><strong className="font-bold text-foreground">Cobrança de diferenças de valor</strong> nos pedidos pagos com cartão de crédito.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span><strong className="font-bold text-foreground">Comunicação clara de cobranças e atualizações</strong> no app e WhatsApp, com redesign que garante transparência nas alterações do pedido.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={mockup.url}
                alt="GPA — Programa Cliente Mais (mockups smartphone)"
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

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-foreground">Piloto — 21 lojas Pão de Açúcar / SP Alphaville / Oeste</h3>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {pilotResults.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated"
                >
                  <Icon className="h-7 w-7 text-primary" />
                  <p className="mt-4 text-base font-semibold leading-snug text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground">Rollout em 66 dias</h3>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {rolloutResults.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated"
                >
                  <Icon className="h-7 w-7 text-primary" />
                  <p className="mt-4 text-base font-semibold leading-snug text-foreground">{label}</p>
                </div>
              ))}
            </div>
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

export default CaseGpaClienteMais;
