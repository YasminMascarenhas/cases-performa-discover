import { useEffect, useMemo, useState } from "react";
import { Search, X, FileDown, Loader2 } from "lucide-react";
import { Header } from "@/components/Header";
import { CaseCard } from "@/components/CaseCard";
import { CompanyRow } from "@/components/CompanyRow";
import { SegmentCard } from "@/components/SegmentCard";
import { exportCasesPdf } from "@/lib/exportCasesPdf";
import { toast } from "sonner";

import { cases, categories, segments, type Category, type CaseItem, type SegmentName } from "@/data/cases";
import performaLogo from "@/assets/performa-logo-icon.png";


const Index = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeSegment, setActiveSegment] = useState<SegmentName | null>(null);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [exporting, setExporting] = useState(false);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const cancelSelection = () => {
    setSelectionMode(false);
    setSelectedIds(new Set());
  };

  const handleExport = async () => {
    const items = cases.filter((c) => selectedIds.has(c.id));
    if (items.length === 0) return;
    setExporting(true);
    try {
      await exportCasesPdf(items);
      toast.success("PDF gerado com sucesso");
      cancelSelection();
    } catch (e) {
      console.error(e);
      toast.error("Erro ao gerar PDF");
    } finally {
      setExporting(false);
    }
  };


  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cases.filter((c) => {
      const matchesCat =
        !activeCategory ||
        (activeCategory === "Segmentos"
          ? !!activeSegment && c.segment === activeSegment
          : c.category === activeCategory || c.extraCategories?.includes(activeCategory));
      const matchesQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q) ||
        c.solution.toLowerCase().includes(q) ||
        c.method.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [query, activeCategory, activeSegment]);

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

  const handleCategoryClick = (cat: Category) => {
    setActiveCategory(cat);
    if (cat !== "Segmentos") {
      setActiveSegment(null);
    }
  };

  const handleSegmentSelect = (name: SegmentName) => {
    setActiveSegment(name);
    setActiveCategory("Segmentos");
  };



  return (
    <div id="top" className="min-h-screen bg-background">
      <img
        src={performaLogo}
        alt="Performa IT"
        className="fixed top-4 right-4 z-50 h-10 w-auto"
      />

      {/* Export PDF button */}
      <button
        onClick={() => setSelectionMode(true)}
        className={`fixed top-5 right-20 z-50 inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-white px-4 py-2 text-sm font-medium text-primary shadow-soft transition-colors hover:bg-primary/10 ${selectionMode ? "hidden" : ""}`}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <FileDown className="h-4 w-4" />
        Exportar PDF
      </button>




      

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
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => {
                  setActiveCategory(null);
                  setActiveSegment(null);
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${
                  activeCategory === null
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-surface text-foreground/80 hover:bg-surface/70 hover:text-foreground"
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${
                      isActive
                        ? cat === "Katalysis"
                          ? "bg-[#7C3AED] text-white shadow-soft"
                          : "bg-primary text-primary-foreground shadow-soft"
                        : "bg-surface text-foreground/80 hover:bg-surface/70 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="pt-6 pb-16 scroll-mt-20">
        {activeCategory === "Segmentos" ? (
          <div className="flex w-full items-stretch">
            {/* Segments sidebar */}
            <aside className="w-[200px] shrink-0 bg-white">
              <div className="sticky top-0 px-3 py-5">

                <ul className="flex flex-col gap-1">
                  {segments.map((s) => {
                    const Icon = s.icon;
                    const isActive = activeSegment === (s.name as SegmentName);
                    return (
                      <li key={s.name}>
                        <button
                          onClick={() => handleSegmentSelect(s.name as SegmentName)}
                          className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-colors outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${
                            isActive
                              ? "bg-[#FFF0E6] text-primary"
                              : "text-foreground hover:bg-surface"
                          }`}
                        >
                          <Icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-primary"}`} />
                          <span>{s.name}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Right column */}
            <div className="min-w-0 flex-1 px-6 py-6">
              {!activeSegment ? (
                <div className="rounded-2xl border border-dashed border-border bg-card p-16 text-center">
                  <p className="text-base font-medium text-foreground">Selecione um segmento</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Escolha um segmento na barra lateral para ver os cases.
                  </p>
                </div>
              ) : filtered.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border bg-card p-16 text-center">
                  <p className="text-base font-medium text-foreground">Nenhum case encontrado</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tente ajustar a busca ou selecionar outro segmento.
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((c) => (
                    <CaseCard
                      key={c.id}
                      item={c}
                      variant="featured"
                      selectable={selectionMode}
                      selected={selectedIds.has(c.id)}
                      onSelectToggle={toggleSelect}
                    />
                  ))}
                </div>

              )}
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="container mx-auto px-6 rounded-2xl border border-dashed border-border bg-card p-16 text-center">
            <p className="text-base font-medium text-foreground">Nenhum case encontrado</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Tente ajustar a busca ou selecionar outra categoria.
            </p>
          </div>
        ) : activeCategory === null ? (
          <div className="flex flex-col gap-4">
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
              groups.sort((a, b) => {
                if (a.company === "Axia Agro") return -1;
                if (b.company === "Axia Agro") return 1;
                return a.company.localeCompare(b.company, "pt-BR");
              });
              return groups.map((g) => (
                <CompanyRow
                  key={g.company}
                  company={g.company}
                  logo={g.logo}
                  items={g.items}
                  selectable={selectionMode}
                  selectedIds={selectedIds}
                  onSelectToggle={toggleSelect}
                />
              ));

            })()}
          </div>
        ) : (
          <div className="container mx-auto px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <CaseCard
                key={c.id}
                item={c}
                variant="featured"
                selectable={selectionMode}
                selected={selectedIds.has(c.id)}
                onSelectToggle={toggleSelect}
              />
            ))}
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

      {/* Floating selection bar */}
      {selectionMode && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-elevated">
            <span className="text-sm font-medium text-foreground">
              {selectedIds.size} {selectedIds.size === 1 ? "case selecionado" : "cases selecionados"}
            </span>
            <button
              onClick={cancelSelection}
              disabled={exporting}
              className="rounded-lg border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              onClick={handleExport}
              disabled={selectedIds.size === 0 || exporting}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {exporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
              {exporting ? "Gerando..." : "Exportar PDF"}
            </button>
          </div>
        </div>
      )}

    </div>


  );
};

export default Index;
