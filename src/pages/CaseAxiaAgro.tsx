import { ArrowLeft, Factory, Store, Users, Target, Lightbulb, TrendingUp, DollarSign, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import axiaLogo from "@/assets/axia-agro-logo.png";
import axiaApp from "@/assets/axia-agro-mockup.png";

const stats = [
  { icon: Factory, value: "2", label: "Indústrias" },
  { icon: Store, value: "+50", label: "Lojas" },
  { icon: Users, value: "+1.4k", label: "Colaboradores" },
];

const results = [
  {
    icon: DollarSign,
    value: "+R$100Mi",
    label: "em oportunidades de vendas geradas em nutrição",
  },
  {
    icon: TrendingUp,
    value: "2 dígitos",
    label: "Taxa de conversão expressiva para o setor agropecuário",
  },
  {
    icon: Smartphone,
    value: "Massivo",
    label: "App gratuito usado por consultores, clientes e parceiros",
  },
];

const CaseAxiaAgro = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para todos os cases
        </Link>
      </div>

      {/* CABEÇALHO DA EMPRESA */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <img src={axiaLogo} alt="Axia Agro" className="h-24 w-auto" />

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Uma empresa do segmento de Agropecuária, com mais de 50 lojas e 2 indústrias
              de nutrição animal nas regiões Norte e Centro-Oeste do Brasil.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                  <p className="mt-3 text-4xl font-bold leading-none text-foreground">{value}</p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-elevated">
            <img
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=80"
              alt="Produtor cuidando do rebanho no campo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* DESAFIO + SOLUÇÃO + MOCKUP */}
      <section className="bg-surface/50 border-y border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center">
            <div className="grid gap-6 sm:grid-cols-2 max-w-2xl">
              <div className="flex flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Desafio</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Consultores e produtores enfrentavam dificuldades para conectar, com
                  precisão, a necessidade nutricional do rebanho com a oferta certa de
                  produtos e serviços — o que impactava diretamente a performance de
                  vendas e o resultado no campo.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  A criação do Protocolo de Engorda dentro do Super App da Axia Agro —
                  uma solução digital gratuita que centraliza dados, recomendações e
                  ferramentas para que o consultor e o produtor sejam mais assertivos
                  na nutrição animal, impulsionando os resultados do cliente e da
                  própria Axia.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={axiaApp}
                alt="Mockup do Super App Axia Agro - Protocolo de Engorda"
                className="h-auto w-[280px] max-w-full drop-shadow-2xl"
              />
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

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {results.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated"
              >
                <Icon className="h-7 w-7 text-primary" />
                <p className="mt-4 text-3xl font-bold leading-tight text-foreground">{value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
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

export default CaseAxiaAgro;
