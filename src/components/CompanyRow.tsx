import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CaseCard } from "@/components/CaseCard";
import type { CaseItem } from "@/data/cases";

interface Props {
  company: string;
  logo?: string;
  items: CaseItem[];
}

export const CompanyRow = ({ company, logo, items }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items.length]);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(320, el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="relative bg-surface px-6 py-5 md:py-6">
      <div className="flex items-stretch gap-5 md:gap-6">
        {/* Logo */}
        <div className="flex w-[120px] shrink-0 items-start justify-center pt-2 pr-3 md:w-[150px] md:pr-4">
          {logo ? (
            <img
              src={logo}
              alt={`${company} logo`}
              loading="lazy"
              className="max-h-20 w-auto object-contain md:max-h-24"
            />
          ) : (
            <span className="text-center text-base font-semibold text-foreground">{company}</span>
          )}
        </div>

        {/* Scroller */}
        <div className="relative min-w-0 flex-1">
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((c) => (
              <div key={c.id} className="w-[300px] shrink-0 md:w-[340px]">
                <CaseCard item={c} />
              </div>
            ))}
          </div>

          {canLeft && (
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 rounded-full bg-card p-2 shadow-soft transition-colors hover:bg-card"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
          )}
          {canRight && (
            <button
              onClick={() => scrollBy(1)}
              aria-label="Próximo"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 rounded-full bg-card p-2 shadow-soft transition-colors hover:bg-card"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
