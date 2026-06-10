import { Globe2, Rocket } from "lucide-react";
import logo from "@/assets/eduflex-logo.png.asset.json";
import cover from "@/assets/eduflex-cover.jpg.asset.json";

const stats = [
  { icon: Globe2, value: "Startup", label: "Brasileira" },
  { icon: Rocket, value: "Google", label: "for Startups" },
];

export const EduFlexCompanyHeader = () => (
  <section data-pdf-section="company-header" className="container mx-auto px-6 py-12">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <div>
        <img src={logo.url} alt="EduFlex — Educação Inclusiva" className="h-20 w-auto md:h-24" />

        <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground">
          <strong className="font-bold text-foreground">Startup brasileira focada em educação inclusiva</strong>,
          com uma plataforma para apoiar professores na adaptação de atividades para estudantes atípicos.
          Selecionada para o <strong className="font-bold text-foreground">PULSE Batch 15 da B2Mamy</strong>,
          com apoio do <strong className="font-bold text-foreground">Google for Startups</strong>.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">
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
          alt="EduFlex — Educação Inclusiva"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);
