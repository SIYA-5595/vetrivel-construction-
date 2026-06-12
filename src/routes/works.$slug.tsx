import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Hammer, MapPin, Ruler, Tag, User } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — Vetrivel Constructions` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: loaderData.project.name },
          { property: "og:image", content: loaderData.project.image },
        ]
      : [],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Project not found</h1>
      <Link to="/works" className="mt-6 inline-flex text-gold underline">
        Back to portfolio
      </Link>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const [active, setActive] = useState(project.gallery[0]);
  const related = PROJECTS.filter(
    (p) => p.slug !== project.slug && p.category === project.category
  ).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.name}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Our Works", to: "/works" },
          { label: project.name },
        ]}
        image={project.image}
      />

      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="overflow-hidden rounded-sm border border-border">
              <img src={active} alt={project.name} className="aspect-[16/10] w-full object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {project.gallery.map((g: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActive(g)}
                  className={`overflow-hidden rounded-sm border-2 transition-all ${
                    active === g ? "border-gold" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={g} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-12">
              <span className="eyebrow">About the project</span>
              <h2 className="mt-4 font-display text-3xl font-bold">{project.name}</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{project.description}</p>
            </div>
          </div>

          <aside className="h-fit rounded-sm border border-border bg-card p-8 lg:sticky lg:top-28">
            <h3 className="font-display text-xl font-bold">Project details</h3>
            <dl className="mt-6 space-y-5 text-sm">
              {[
                { Icon: MapPin, label: "Location", value: project.location },
                { Icon: Tag, label: "Type", value: project.type },
                { Icon: Calendar, label: "Completed", value: project.year },
                { Icon: Ruler, label: "Built-up Area", value: project.area },
                { Icon: User, label: "Client", value: project.client },
                { Icon: Hammer, label: "Scope", value: project.scope },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-accent text-gold">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-0.5 font-semibold text-ink">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <Link to="/contact" className="btn-ink mt-8 w-full">
              Start a Similar Project
            </Link>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-muted/40 py-20">
          <div className="container-x">
            <h2 className="font-display text-2xl font-bold">Related projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/works/$slug"
                  params={{ slug: r.slug }}
                  className="group block overflow-hidden rounded-sm border border-border bg-card transition-all hover:-translate-y-1 hover:border-gold"
                >
                  <img
                    src={r.image}
                    alt={r.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold group-hover:text-gold">{r.name}</h3>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {r.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
