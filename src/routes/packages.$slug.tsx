import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { PACKAGES } from "@/lib/site-data";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const pkg = PACKAGES.find((p) => p.slug === params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.pkg.tier} — ${loaderData.pkg.name} | Vetrivel Constructions` },
          { name: "description", content: loaderData.pkg.summary },
        ]
      : [],
  }),
  component: PackageDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Package not found</h1>
      <Link to="/packages" className="mt-6 inline-flex text-gold underline">
        Back to all packages
      </Link>
    </div>
  ),
});

function PackageDetail() {
  const { pkg } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={pkg.tier}
        title={`${pkg.name} Package`}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Packages", to: "/packages" },
          { label: pkg.name },
        ]}
      />
      <section className="container-x grid gap-12 py-24 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <span className="eyebrow">Overview</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            {pkg.summary}
          </h2>
          <div className="mt-10">
            <h3 className="font-display text-xl font-bold">What's included</h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {pkg.features.map((f: string) => (
                <li
                  key={f}
                  className="flex gap-3 rounded-sm border border-border bg-card p-4 text-sm"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="font-display text-xl font-bold">Highlights</h3>
            <ul className="mt-5 flex flex-wrap gap-3">
              {pkg.highlights.map((h: string) => (
                <li
                  key={h}
                  className="inline-flex items-center gap-2 rounded-sm border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-ink"
                >
                  <Star className="h-4 w-4 text-gold" /> {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="h-fit rounded-sm border border-border bg-ink p-8 text-white lg:sticky lg:top-28">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            Starting from
          </div>
          <div className="mt-2 font-display text-4xl font-bold text-gold">
            {pkg.pricePerSqft}
          </div>
          <p className="mt-3 text-sm text-white/65">
            All-inclusive of materials, labour, supervision and standard finishes.
          </p>
          <Link to="/contact" className="btn-gold mt-7 w-full">
            Get Detailed Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <p>✓ Free site visit</p>
            <p>✓ Detailed BOQ on request</p>
            <p>✓ Customisations welcome</p>
          </div>
        </aside>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold">Compare other packages</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.filter((p) => p.slug !== pkg.slug).map((p) => (
              <Link
                key={p.slug}
                to="/packages/$slug"
                params={{ slug: p.slug }}
                className="group rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                  {p.tier}
                </div>
                <h3 className="mt-2 font-display text-lg font-bold group-hover:text-gold">
                  {p.name}
                </h3>
                <div className="mt-2 text-sm font-bold text-ink">{p.pricePerSqft}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
