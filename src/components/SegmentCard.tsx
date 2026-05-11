import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SegmentProject } from "@/data/cases";

interface Props {
  name: string;
  icon: LucideIcon;
  projects?: SegmentProject[];
  expanded?: boolean;
  onToggle?: () => void;
}

export const SegmentCard = ({ name, icon: Icon, projects, expanded, onToggle }: Props) => {
  const hasProjects = !!projects && projects.length > 0;

  return (
    <div className="flex flex-col gap-3">
      <article
        onClick={hasProjects ? onToggle : undefined}
        className={`group flex aspect-[10/3] flex-row items-center justify-start gap-4 rounded-xl border bg-card px-5 py-3 shadow-soft transition-all duration-300 ${
          hasProjects ? "cursor-pointer" : ""
        } ${
          expanded
            ? "border-primary/50 shadow-elevated"
            : "border-border hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
        }`}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
          <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
        </div>
        <h3 className="flex-1 text-lg font-semibold leading-tight text-foreground">{name}</h3>
        {hasProjects && (
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        )}
      </article>

      {hasProjects && expanded && (
        <div className="grid gap-2 pl-2">
          {projects!.map((p) => (
            <div
              key={`${p.company}-${p.title}`}
              className="rounded-lg border border-border bg-card px-4 py-3 shadow-soft transition-colors hover:border-primary/40"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">{p.company}</p>
              <p className="mt-0.5 text-sm font-medium text-foreground">{p.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
