import type { LucideIcon } from "lucide-react";

interface Props {
  name: string;
  icon: LucideIcon;
}

export const SegmentCard = ({ name, icon: Icon }: Props) => {
  return (
    <article className="group flex aspect-square flex-col items-center justify-center gap-5 rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/15">
        <Icon className="h-10 w-10 text-primary" strokeWidth={1.75} />
      </div>
      <h3 className="text-center text-2xl font-semibold leading-tight text-foreground">
        {name}
      </h3>
    </article>
  );
};
