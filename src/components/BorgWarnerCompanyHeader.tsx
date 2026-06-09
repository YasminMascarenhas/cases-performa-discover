import { Milestone, Globe2, Users } from "lucide-react";
import logo from "@/assets/borgwarner-logo.png.asset.json";
import cover from "@/assets/borgwarner-team.jpg.asset.json";

const stats = [
  { icon: Milestone, value: "130+", label: "anos de história" },
  { icon: Globe2, value: "+24", label: "países" },
  { icon: Users, value: "40k", label: "Colaboradores" },
];

export const BorgWarnerCompanyHeader = () => (
  <section className="container mx-auto px-6 py-12">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <img src={logo.url} alt="BorgWarner" className="h-28 w-auto md:h-36" />

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          BorgWarner é <strong className="font-bold text-foreground">líder global em tecnologias de propulsão e eletrificação automotiva</strong>,
          se destaca pelo desenvolvimento de motores elétricos, transmissões avançadas, sistemas de
          gerenciamento térmico e eletrônica de potência, impulsionando a eficiência e sustentabilidade
          da mobilidade.
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
          alt="Equipe BorgWarner"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);
