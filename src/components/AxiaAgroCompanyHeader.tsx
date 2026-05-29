import { Factory, Store, Users } from "lucide-react";
import axiaLogo from "@/assets/axia-agro-logo.png";
import heroImage from "@/assets/axia-colheitadeiras.jpg";

const stats = [
  { icon: Factory, value: "2", label: "Indústrias" },
  { icon: Store, value: "+50", label: "Lojas" },
  { icon: Users, value: "+1.4k", label: "Colaboradores" },
];

export const AxiaAgroCompanyHeader = () => (
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
);
