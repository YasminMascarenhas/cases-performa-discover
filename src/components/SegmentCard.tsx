import type { LucideIcon } from "lucide-react";

interface Props {
  name: string;
  icon: LucideIcon;
}

export const SegmentCard = ({ name, icon: Icon }: Props) => {
  return (
    <article className="group flex aspect-[10/3] flex-row items-center justify-start gap-4 rounded-xl border border-border bg-card px-5 py-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
        <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
      </div>
      <h3 className="text-lg font-semibold leading-tight text-foreground">
        {name}
      </h3>
    </article>
  );
};
