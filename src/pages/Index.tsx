import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { Header } from "@/components/Header";
import { CaseCard } from "@/components/CaseCard";
import { CompanyRow } from "@/components/CompanyRow";
import { SegmentCard } from "@/components/SegmentCard";
import { cases, categories, segments, type Category, type CaseItem } from "@/data/cases";
import performaLogo from "@/assets/performa-logo-icon.png";

const Index = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [expandedSegment, setExpandedSegment] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cases.filter((c) => {
      const matchesCat = !activeCategory || c.category === activeCategory;
      const matchesQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q) ||
        c.solution.toLowerCase().includes(q) ||
        c.method.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [query, activeCategory]);

  const sectionMap: Record<string, Category> = {
    empresas: "Segmentos",
    katalysis: "Katalysis",
    discovery: "Discovery & Design",
    agile: "Agile Development",
  };

  useEffect(() => {
    const applyHash = () => {
      const key = window.location.hash.replace("#", "");
      if (key && sectionMap[key]) {
        setActiveCategory(sectionMap[key]);
        document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background">
      <img
        src={performaLogo}
        alt="Performa IT"
        className="fixed top-4 right-4 z-50 h-10 w-auto"
      />


      

      {/* HERO */}
      <section className="border-b border-border bg-gradient-to-b from-background to-surface">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-primary/30 bg-card px-3 py-1 text-xs font-medium text-primary">
              Performa IT · O futuro, hoje.
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Deck de Cases
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base font-normal text-muted-foreground md:text-lg">
              Explore as histórias de transformação digital que construímos lado a lado com nossos parceiros.
            </p>

            {/* Search */}
            <div className="group relative mx-auto mt-10 max-w-2xl">
              <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por empresa, solução, método técnico..."
                className="h-14 w-full rounded-2xl border border-border bg-card pl-14 pr-12 text-base text-foreground placeholder:text-muted-foreground/70 shadow-soft transition-all focus:border-primary focus:outline-none focus:shadow-focus"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                  aria-label="Limpar busca"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Chips */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${
                  activeCategory === null
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-surface text-foreground/80 hover:bg-surface/70 hover:text-foreground"
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-surface text-foreground/80 hover:bg-surface/70 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="container mx-auto px-6 pt-6 pb-16 scroll-mt-20">


        {activeCategory === "Segmentos" ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {segments
              .filter((s) => !query.trim() || s.name.toLowerCase().includes(query.trim().toLowerCase()))
              .map((s) => (
                <SegmentCard
                  key={s.name}
                  name={s.name}
                  icon={s.icon}
                  projects={s.projects}
                  expanded={expandedSegment === s.name}
                  onToggle={() => setExpandedSegment(expandedSegment === s.name ? null : s.name)}
                />
              ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-16 text-center">
            <p className="text-base font-medium text-foreground">Nenhum case encontrado</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Tente ajustar a busca ou selecionar outra categoria.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {(() => {
              const groups: { company: string; logo?: string; items: CaseItem[] }[] = [];
              const idx = new Map<string, number>();
              filtered.forEach((c) => {
                if (!idx.has(c.company)) {
                  idx.set(c.company, groups.length);
                  groups.push({ company: c.company, logo: c.logo, items: [c] });
                } else {
                  const g = groups[idx.get(c.company)!];
                  g.items.push(c);
                  if (!g.logo && c.logo) g.logo = c.logo;
                }
              });
              return groups.map((g) => (
                <CompanyRow key={g.company} company={g.company} logo={g.logo} items={g.items} />
              ));
            })()}
          </div>
        )}

      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 py-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Performa IT. Todos os direitos reservados.
          </p>
          <p className="text-sm font-medium text-primary">o futuro, hoje.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
