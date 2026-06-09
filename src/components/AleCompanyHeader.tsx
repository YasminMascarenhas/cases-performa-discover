import { Clock, Warehouse, Users } from "lucide-react";
import aleLogo from "@/assets/ale-logo.png.asset.json";
import aleCover from "@/assets/ale-cover.png.asset.json";

const stats = [
  { icon: Clock, value: "+30 Anos", label: "de história" },
  { icon: Warehouse, value: "43", label: "Centros de distribuição" },
  { icon: Users, value: "+1k", label: "Colaboradores" },
];

export const AleCompanyHeader = () => (
  <section data-pdf-section="company-header" className="container mx-auto px-6 py-12">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <img src={aleLogo.url} alt="ALE Combustíveis" className="h-24 w-auto" />

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          <strong className="font-bold text-foreground">ALE Combustíveis</strong> é a quarta maior distribuidora privada de combustíveis do Brasil.
          Fundada em 1996, a empresa atua em 21 estados e no Distrito Federal, com aproximadamente
          1.500 postos de serviço e 43 bases de distribuição. Desde 2018, a ALE faz parte do Grupo
          Glencore, sediado na Suíça.
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          A empresa é reconhecida pela inovação em combustíveis mais eficientes e sustentáveis,
          <strong className="font-bold text-foreground"> atendendo milhões de clientes com forte foco em excelência logística, tecnologia e descarbonização</strong>.
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
          src={aleCover.url}
          alt="Posto de combustível ALE"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);
