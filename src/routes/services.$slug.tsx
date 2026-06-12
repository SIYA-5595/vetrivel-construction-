import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Vetrivel Constructions` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: loaderData.service.title },
          { property: "og:image", content: loaderData.service.image },
        ]
      : [],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-flex text-gold underline">
        Back to services
      </Link>
    </div>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
        image={service.image}
      />
      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow">Overview</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{service.short}</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{service.description}</p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-bold">Capabilities</h3>
                <ul className="mt-5 space-y-3">
                  {service.features.map((f: string) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Why clients choose us</h3>
                <ul className="mt-5 space-y-3">
                  {service.benefits.map((b: string) => (
                    <li key={b} className="flex gap-3 text-sm">
                      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <aside className="h-fit rounded-sm bg-ink p-8 text-white lg:sticky lg:top-28">
            <h3 className="font-display text-2xl font-bold text-gold">Ready to start?</h3>
            <p className="mt-3 text-sm text-white/70">
              Tell us about your site and goals. We'll respond with a free, no-obligation
              proposal in under 48 hours.
            </p>
            <Link to="/contact" className="btn-gold mt-7 w-full">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold">Other services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3).map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block overflow-hidden rounded-sm border border-border bg-card transition-all hover:border-gold"
              >
                <img src={s.image} alt={s.title} loading="lazy" className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold group-hover:text-gold">{s.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{s.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
