import { Globe, Users, DollarSign } from "lucide-react";
import logo from "@/assets/hpe-logo.png.asset.json";
import cover from "@/assets/hpe-cover.png.asset.json";

const stats = [
  { icon: Globe, value: "+150", label: "Países" },
  { icon: Users, value: "+60k", label: "Colaboradores" },
  { icon: DollarSign, value: "+30 Bi", label: "Faturamento global" },
];

export const HpeCompanyHeader = () => (
  <section data-pdf-section="company-header" className="container mx-auto px-6 py-12">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <div>
        <img src={logo.url} alt="HPE — Hewlett Packard Enterprise" className="h-12 w-auto md:h-14" />

        <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground">
          <strong className="font-bold text-foreground">Uma das principais empresas globais de tecnologia.</strong>{" "}
          Se concentra em soluções corporativas voltadas para infraestrutura, nuvem, computação de alto desempenho e serviços de TI.
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
          alt="HPE — Hewlett Packard Enterprise"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);
