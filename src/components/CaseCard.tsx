import { Building2, Compass, Code2, Bot, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CaseItem, Category } from "@/data/cases";

const categoryIcon: Record<Category, React.ComponentType<{ className?: string }>> = {
  "Segmentos": Building2,
  "Discovery & Design": Compass,
  "Agile Development": Code2,
  "Katalysis": Bot,
};

interface Props {
  item: CaseItem;
  variant?: "default" | "featured";
}

export const CaseCard = ({ item, variant = "default" }: Props) => {
  const Icon = categoryIcon[item.category];
  const isFeatured = variant === "featured";

  const content = (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
      {item.coverImage ? (
        <div className={`relative w-full overflow-hidden bg-surface ${isFeatured ? "aspect-[32/9]" : "aspect-[21/9]"}`}>
          <img
            src={item.coverImage}
            alt={`${item.company} — ${item.title}`}
            loading="lazy"
            style={item.coverPosition ? { objectPosition: item.coverPosition } : undefined}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {isFeatured && (
            <>
              <div className="absolute inset-0 bg-white/80" />
              {item.logo && (
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    loading="lazy"
                    className={`w-auto object-contain ${item.company === "ALE Combustíveis" ? "max-h-10 md:max-h-12" : item.company === "BorgWarner" ? "max-h-20 md:max-h-28" : item.company === "Cogna" ? "max-h-7 md:max-h-8" : "max-h-16 md:max-h-20"}`}
                  />
                </div>
              )}
            </>
          )}
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-extrabold leading-snug text-foreground">{item.title}</h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

        <div className="mt-5 grid gap-2 border-t border-border pt-4 text-xs">
          <div className="flex justify-between gap-4">
            <span className="text-muted-foreground">Solução</span>
            <span className="text-right font-medium text-foreground">{item.solution}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-muted-foreground">Método</span>
            <span className="text-right font-medium text-foreground">{item.method}</span>
          </div>
        </div>
      </div>
    </article>
  );

  if (item.slug) {
    return (
      <Link to={`/case/${item.slug}`} className="block h-full">
        {content}
      </Link>
    );
  }
  return content;
};
