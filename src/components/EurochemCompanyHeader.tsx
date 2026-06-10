import { Milestone, Globe2, Users } from "lucide-react";
import logo from "@/assets/eurochem-logo.svg.asset.json";
import cover from "@/assets/eurochem-cover.png.asset.json";

const stats = [
  { icon: Milestone, value: "+20", label: "Anos" },
  { icon: Globe2, value: "+20", label: "Países" },
  { icon: Users, value: "32k", label: "Colaboradores" },
];

export const EurochemCompanyHeader = () => (
  <section data-pdf-section="company-header" className="container mx-auto px-6 py-12">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <div>
        <img src={logo.url} alt="EuroChem" className="-ml-2 h-16 w-auto md:-ml-3 md:h-20" />

        <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground">
          <strong className="font-bold text-foreground">Líder mundial na produção de fertilizantes nitrogenados, fosfatados e potássicos.</strong>{" "}
          Comprometida com a sustentabilidade e investe em pesquisas e tecnologias para reduzir o impacto ambiental da produção de fertilizantes.
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
          alt="EuroChem — equipe na planta"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);
