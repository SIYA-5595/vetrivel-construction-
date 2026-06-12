import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Vetrivel Constructions" },
      {
        name: "description",
        content:
          "Residential, commercial, villa, interior, renovation and turnkey construction services across South India.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six service lines. One accountable team."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <section className="container-x py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className={`group grid overflow-hidden rounded-sm border border-border bg-card transition-all hover:border-gold hover:shadow-[var(--shadow-card)] ${
                i % 2 === 1 ? "lg:[grid-template-columns:1fr_1fr]" : "lg:[grid-template-columns:1fr_1fr]"
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold transition-colors group-hover:text-gold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink group-hover:text-gold">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
