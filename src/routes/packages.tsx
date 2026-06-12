import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { PACKAGES } from "@/lib/site-data";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Construction Packages — Vetrivel Constructions" },
      {
        name: "description",
        content:
          "Four transparently-priced construction packages — Essential, Classic, Premium and Signature Luxury.",
      },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Transparent construction packages — pick the one that fits your dream."
        crumbs={[{ label: "Home", to: "/" }, { label: "Packages" }]}
      />
      <section className="container-x py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Four tiers · Fixed price · No surprises</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Every package includes structural warranty, branded materials and full project
            supervision.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map((p, i) => (
            <article
              key={p.slug}
              className={`relative flex flex-col rounded-sm border p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${
                i === 2 ? "border-gold bg-ink text-ink-foreground" : "border-border bg-card"
              }`}
            >
              {i === 2 && (
                <span className="absolute -top-3 left-7 rounded-sm bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-foreground">
                  Most popular
                </span>
              )}
              <div className={`text-[11px] font-semibold uppercase tracking-[0.22em] text-gold`}>
                {p.tier}
              </div>
              <h3 className={`mt-2 font-display text-2xl font-bold ${i === 2 ? "text-white" : ""}`}>
                {p.name}
              </h3>
              <p className={`mt-3 text-sm ${i === 2 ? "text-white/65" : "text-muted-foreground"}`}>
                {p.summary}
              </p>
              <div className={`mt-6 font-display text-3xl font-bold ${i === 2 ? "text-gold" : "text-ink"}`}>
                {p.pricePerSqft}
              </div>
              <ul className={`mt-6 space-y-3 text-sm ${i === 2 ? "text-white/80" : "text-ink/80"}`}>
                {p.features.slice(0, 5).map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                search={{ package: p.name }}
                className={`mt-8 inline-flex items-center gap-2 self-start border-b text-sm font-semibold uppercase tracking-wider ${
                  i === 2 ? "border-gold text-gold" : "border-ink text-ink hover:border-gold hover:text-gold"
                }`}
              >
                Get Quote <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
