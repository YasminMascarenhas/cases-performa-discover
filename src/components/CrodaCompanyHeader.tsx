import { Milestone, Globe2, Users } from "lucide-react";
import logo from "@/assets/croda-logo.png.asset.json";
import cover from "@/assets/croda-cover.png.asset.json";

const stats = [
  { icon: Milestone, value: "+100", label: "anos" },
  { icon: Globe2, value: "+30", label: "países" },
  { icon: Users, value: "6k", label: "colaboradores" },
];

export const CrodaCompanyHeader = () => (
  <section className="container mx-auto px-6 py-12">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <img src={logo.url} alt="Croda" className="-ml-8 h-32 w-auto object-left md:h-44" />

        <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
          <strong className="font-bold text-foreground">Empresa britânica com referência global em ingredientes sustentáveis e de alta performance</strong>,
          usados por marcas líderes nos setores de cosméticos, saúde e agricultura. Está listada entre
          as maiores empresas da Bolsa de Londres, e está comprometida em ser positiva para o clima,
          as pessoas e a terra até 2030.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-4">
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
          alt="Croda — indústria"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);
