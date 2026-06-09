import { Milestone, MapPin, GraduationCap } from "lucide-react";
import logo from "@/assets/cogna-logo.png.asset.json";
import cover from "@/assets/cogna-cover.jpg.asset.json";

const stats = [
  { icon: Milestone, value: "+50", label: "anos" },
  { icon: MapPin, value: "+5mil", label: "municípios" },
  { icon: GraduationCap, value: "+24mi", label: "alunos" },
];

export const CognaCompanyHeader = () => (
  <section data-pdf-section="company-header" className="container mx-auto px-6 py-12">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <img src={logo.url} alt="Cogna Educação" className="h-16 w-auto md:h-20" />

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          <strong className="font-bold text-foreground">Uma das maiores organizações de educação do mundo</strong>,
          referência no Brasil em soluções educacionais que vão do ensino básico ao superior, passando
          por modelos híbridos e digitais.
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
          alt="Evento Cogna Educação"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);
