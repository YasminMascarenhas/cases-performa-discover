import { Rocket, ShieldCheck } from "lucide-react";
import logo from "@/assets/liga-logo.svg.asset.json";
import cover from "@/assets/liga-cover.png.asset.json";

const stats = [
  { icon: Rocket, value: "Startup", label: "Brasileira" },
  { icon: ShieldCheck, value: "Livre", label: "Classificação" },
];

export const LigaCompanyHeader = () => (
  <section data-pdf-section="company-header" className="container mx-auto px-6 py-12">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <div>
        <img src={logo.url} alt="Liga" className="h-12 w-auto md:h-14" />

        <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground">
          <strong className="font-bold text-foreground">A Liga é uma organização que desenvolve soluções digitais para o futebol brasileiro,</strong>{" "}
          criando experiências rápidas, seguras e automatizadas para torcedores e clubes. Sua operação conecta dados, comunicação e engajamento em tempo real, especialmente em dias de jogo, quando milhares de interações acontecem ao mesmo tempo.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
              <p className="mt-3 text-2xl font-bold leading-none text-foreground">{value}</p>
              <p className="mt-2 text-xs font-medium text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-elevated">
        <img
          src={cover.url}
          alt="Liga — futebol brasileiro"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);
