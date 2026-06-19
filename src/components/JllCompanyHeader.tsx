import { Milestone, Globe, Users } from "lucide-react";
import logo from "@/assets/jll-logo.png.asset.json";
import cover from "@/assets/jll-workshop-team.png.asset.json";

const stats = [
  { icon: Milestone, value: "+25", label: "Anos" },
  { icon: Globe, value: "+80", label: "Países" },
  { icon: Users, value: "103k", label: "Colaboradores" },
];

export const JllCompanyHeader = () => (
  <section data-pdf-section="company-header" className="container mx-auto px-6 py-12">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <div>
        <img src={logo.url} alt="JLL" className="h-12 w-auto md:h-14" />

        <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground">
          <strong className="font-bold text-foreground">Uma das maiores empresas globais de Real Estate e Investimentos.</strong>{" "}
          Gerencia um portfólio superior a 4,6 bilhões de m². Reconhecida como uma Fortune 500 Company, também está entre as 100 empresas mais sustentáveis do mundo.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-4">
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
          alt="JLL — Workshop Colaborativo"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);
