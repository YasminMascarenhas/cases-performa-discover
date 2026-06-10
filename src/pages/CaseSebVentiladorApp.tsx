import { ArrowLeft, Target, Lightbulb, TrendingUp, Smartphone, Wifi, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SebCompanyHeader } from "@/components/SebCompanyHeader";
import sideImage from "@/assets/seb-ventilador-mockup.png.asset.json";

const results = [
  { icon: Smartphone, label: "Primeiro ventilador do mercado controlado via app" },
  { icon: Wifi, label: "Mais conectividade e autonomia para o usuário" },
  { icon: Sparkles, label: "Fortalecimento da inovação e transformação digital da marca" },
];

const CaseSebVentiladorApp = () => {
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

      <SebCompanyHeader />

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
                  <strong className="font-bold text-foreground">App para controlar o ventilador Arno Ultra Silence Force Bluetooth via smartphone,</strong>{" "}
                  com foco em conectividade, usabilidade e inovação tecnológica.
                </p>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground">Solução — App Mobile pioneiro no mercado</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <strong className="font-bold text-foreground">Solução pioneira no mercado: App Mobile para controle de ventilador via Bluetooth.</strong>{" "}
                  Desenvolvido em Swift (iOS) e Kotlin (Android) com interface intuitiva, alta performance e segurança. Firebase utilizada para autenticação, transferência de dados e Machine Learning para aprimorar a experiência.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={sideImage.url}
                alt="Groupe SEB — Ventilador por App Mobile"
                className="max-h-[520px] w-full rounded-3xl object-cover shadow-elevated"
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

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
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

export default CaseSebVentiladorApp;
