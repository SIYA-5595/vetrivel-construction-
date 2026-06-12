import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Flag, Heart, ShieldCheck, Target } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Counter } from "@/components/site/Counter";
import { STATS, TESTIMONIALS } from "@/lib/site-data";
import p1 from "@/assets/project-1.jpg";
import p3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vetrivel Constructions" },
      {
        name: "description",
        content:
          "22+ years of engineering excellence. Discover the team, the vision and the values behind Vetrivel Constructions.",
      },
      { property: "og:title", content: "About Vetrivel Constructions" },
      {
        property: "og:description",
        content: "Two decades of building landmarks across South India.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { Icon: ShieldCheck, title: "Integrity", text: "We build with the same care, whether anyone is watching or not." },
  { Icon: Target, title: "Precision", text: "Engineered to tolerances measured in millimetres, not metres." },
  { Icon: Heart, title: "Empathy", text: "Every project is someone's life savings. We treat it that way." },
  { Icon: Flag, title: "Accountability", text: "One project manager. One contract. One point of ownership." },
];

const TEAM = [
  { name: "Perumal.T", role: "Founder & Managing Director", initials: "PT" },
  { name: "Iyyappan.P", role: "Purchasing Manager", initials: "IP" }, 
]

const TIMELINE = [
  { year: "2015", title: "Founded", text: "Started with a small residential project on a modest plot. A humble beginning with a vision to deliver quality homes." },
  { year: "2018", title: "Early Growth", text: "Completed multiple residential projects and started building strong client trust through quality and timely delivery." },
  { year: "2020", title: "Expansion Stage", text: "Moved into larger residential and small commercial projects with improved team strength and better execution capacity." },
  { year: "2022", title: "Strong Reputation", text: "Became a trusted name in the region with consistent project delivery and increasing client referrals." },
  { year: "2024", title: "Established Brand", text: "Recognized as a growing construction company with a strong portfolio across residential and commercial projects, focusing on quality, trust, and innovation." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Building landmarks, earning trust — for over two decades."
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
        image={p1}
      />

      {/* Overview */}
      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="eyebrow"><span className="gold-rule" /> Overview</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            A construction company built on engineering rigour and quiet conviction.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Since 2015, Vetrivel Constructions has been delivering trusted construction solutions with 
            a strong focus on quality,innovation, and customer satisfaction. From planning and approvals to structural design,
            interiors, and project execution, we ensure every project is completed with precision, professionalism, and uncompromising standards. Our commitment to excellence enables us to create durable, functional, and aesthetically refined spaces that stand the test of time.

          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We don't pursue volume. We pursue projects we can stand behind, and clients we
            want to work with for life.
          </p>
        </div>
        <div className="relative">
          <img
            src={p3}
            alt="Project site"
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-sm bg-ink/90 p-6 text-white backdrop-blur">
            <div className="font-display text-3xl font-bold text-gold">11 Years</div>
            <div className="mt-1 text-sm text-white/70">
              of building South India's landmarks
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="bg-muted/40 py-24">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {[
            {
              Icon: Eye,
              eyebrow: "Our Vision",
              title: "To be the most trusted name in Indian construction.",
              text: "A name families pass to the next generation, and developers return to project after project.",
            },
            {
              Icon: Compass,
              eyebrow: "Our Mission",
              title: "Engineer every project to outlast the people who built it.",
              text: "We build for permanence — structurally, materially and aesthetically.",
            },
          ].map((c) => (
            <div key={c.eyebrow} className="rounded-sm border border-border bg-card p-10">
              <span className="grid h-14 w-14 place-items-center rounded-sm bg-ink text-gold">
                <c.Icon className="h-6 w-6" />
              </span>
              <div className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {c.eyebrow}
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold">{c.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="container-x py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Core Values</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            The four principles that govern every decision on site.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-sm border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-[var(--shadow-card)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-sm bg-gold text-gold-foreground">
                <v.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-20 text-white">
        <div className="container-x grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-5xl font-bold text-gold">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Leadership</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            The team behind every blueprint.
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="group rounded-sm border border-border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:border-gold"
            >
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-gold to-[oklch(0.65_0.18_55)] font-display text-3xl font-bold text-ink-foreground">
                {m.initials}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{m.name}</h3>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {m.role}
              </p>
            </div>
          ))}
        </div>

        {/* Leadership Statements */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="relative rounded-sm border border-gold/20 bg-gold/5 p-10">
              <span className="absolute -top-4 left-10 scale-150 text-6xl text-gold/20 font-serif">“</span>
              <blockquote className="relative font-display text-lg italic leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-8 bg-gold" />
                <div>
                  <div className="font-bold text-ink">{t.name}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/40 py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Journey</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              From our first project to 150+ across South India.
            </h2>
          </div>
          <ol className="relative mx-auto mt-14 max-w-3xl border-l-2 border-gold/40">
            {TIMELINE.map((t) => (
              <li key={t.year} className="ml-8 pb-12 last:pb-0">
                <span className="absolute -left-[11px] grid h-5 w-5 place-items-center rounded-full bg-gold ring-4 ring-background" />
                <div className="font-display text-2xl font-bold text-gold">{t.year}</div>
                <h3 className="mt-1 font-display text-xl font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
