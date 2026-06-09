import { Milestone, Globe2, Users } from "lucide-react";
import logo from "@/assets/continental-logo.png.asset.json";
import cover from "@/assets/continental-cover.webp.asset.json";

const stats = [
  { icon: Milestone, value: "+150", label: "anos" },
  { icon: Globe2, value: "+58", label: "países" },
  { icon: Users, value: "200k", label: "colaboradores" },
];

export const ContinentalCompanyHeader = () => (
  <section className="container mx-auto px-6 py-12">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <img src={logo.url} alt="Continental" className="-ml-6 h-20 w-auto object-left md:h-24" />

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          <strong className="font-bold text-foreground">Uma das maiores fornecedoras de tecnologia automotiva do mundo</strong>,
          reconhecida por sua excelência em mobilidade inteligente, pneus premium e soluções para
          segurança veicular.
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          1 em cada 3 carros novos na Europa sai de fábrica com pneus Continental.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-4">
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
          alt="Continental — pneus premium"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);
