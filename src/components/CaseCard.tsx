import { Building2, Compass, Code2, Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CaseItem, Category } from "@/data/cases";

const categoryIcon: Record<Category, React.ComponentType<{ className?: string }>> = {
  "Segmentos": Building2,
  "Discovery & Design": Compass,
  "Agile Development": Code2,
  "Katalysis": Sparkles,
};

interface Props {
  item: CaseItem;
}

export const CaseCard = ({ item }: Props) => {
  const Icon = categoryIcon[item.category];

  const content = (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
      {item.logo ? (
        <div className="relative flex h-24 w-full items-center justify-center overflow-hidden bg-surface px-6">
          {item.coverImage && (
            <img
              src={item.coverImage}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-[0.15]"
            />
          )}
          <img
            src={item.logo}
            alt={`${item.company} logo`}
            loading="lazy"
            className="relative max-h-16 w-auto object-contain"
          />
        </div>
      ) : item.coverImage ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface">
          <img
            src={item.coverImage}
            alt={`${item.company} — ${item.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
            <Icon className="h-3.5 w-3.5 text-primary" />
            {item.category}
          </span>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.company}</p>
        <h3 className="mt-1.5 text-lg font-semibold leading-snug text-foreground">{item.title}</h3>

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

        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span key={t} className="rounded-md bg-surface px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              {t}
            </span>
          ))}
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
