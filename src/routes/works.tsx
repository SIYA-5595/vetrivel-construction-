import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { PROJECTS } from "@/lib/site-data";

const CATEGORIES = ["All", "Residential", "Commercial", "Villas", "Interiors", "Industrial"] as const;

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Our Works — Vetrivel Constructions" },
      {
        name: "description",
        content:
          "Browse our portfolio of residential, commercial, villa, interior and industrial projects across South India.",
      },
    ],
  }),
  component: WorksPage,
});

function WorksPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const projects = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our works — 250+ landmarks delivered."
        crumbs={[{ label: "Home", to: "/" }, { label: "Our Works" }]}
      />
      <section className="container-x py-20">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-sm border px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === c
                  ? "border-gold bg-gold text-gold-foreground"
                  : "border-border bg-card text-ink hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/works/$slug"
              params={{ slug: p.slug }}
              className="group block overflow-hidden rounded-sm border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-sm bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-foreground">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold transition-colors group-hover:text-gold">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {p.type} · {p.location}
                </p>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                  {p.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        )}
      </section>
      <CTASection />
    </>
  );
}
