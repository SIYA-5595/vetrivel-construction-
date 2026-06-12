import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  Clock,
  HardHat,
  HeartHandshake,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Counter } from "@/components/site/Counter";
import { CTASection } from "@/components/site/CTASection";
import { PACKAGES, PROJECTS, SERVICES, STATS, TESTIMONIALS } from "@/lib/site-data";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vetrivel Constructions — Premium Builders in Thoothukudi" },
      {
        name: "description",
        content:
          "Premium construction company building homes, villas, towers and commercial landmarks across South India. Trust is the base of our business.",
      },
      { property: "og:title", content: "Vetrivel Constructions — Premium Builders" },
      {
        property: "og:description",
        content:
          "From bespoke villas to G+15 office towers — engineered to last, crafted to inspire.",
      },
    ],
  }),
  component: HomePage,
});

const REASONS = [
  { Icon: ShieldCheck, title: "Quality Construction", text: "IS-code structures, branded materials, third-party quality audits at every milestone." },
  { Icon: Clock, title: "On-Time Delivery", text: "Contractually guaranteed timelines, with weekly progress reports and milestone reviews." },
  { Icon: HardHat, title: "Experienced Team", text: "140+ engineers, architects and craftsmen led by project managers averaging 18 years of experience." },
  { Icon: BadgeCheck, title: "Transparent Pricing", text: "Fixed-price contracts with line-item BOQ. No hidden costs. No mid-project surprises." },
  { Icon: HeartHandshake, title: "Customer Satisfaction", text: "1,800+ happy families. 92% of our clients refer us within their first year of moving in." },
  { Icon: Sparkles, title: "Modern Technology", text: "BIM-led coordination, drone surveys, IoT-monitored sites and digital quality dashboards." },
];

function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <WhyChooseUs />
      <PackagesSection />
      <ServicesSection />
      <FeaturedProjects />
      <StatsSection />
      <TestimonialsSection />
      <RecentGallery />
      <CTASection />
    </>
  );
}

/* About */
function AboutSection() {
  return (
    <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
      <div className="relative">
        <img
          src={PROJECTS[0].image}
          alt="Vetrivel Constructions project"
          className="aspect-[4/5] w-full rounded-sm object-cover"
        />
        <div className="absolute -bottom-8 -right-2 hidden w-64 rounded-sm bg-gold p-6 text-gold-foreground shadow-[var(--shadow-elegant)] sm:block">
          <div className="font-display text-5xl font-bold leading-none">22+</div>
          <div className="mt-2 text-sm font-semibold uppercase tracking-wider">
            Years of <br />
            Engineering Excellence
          </div>
        </div>
      </div>
      <div>
        <span className="eyebrow">
          <span className="gold-rule" /> About the Company
        </span>
        <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Two decades of building landmarks that
          <span className="text-gold"> stand the test of time.</span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Vetrivel Constructions was founded on a simple promise — every structure we build
          should outlast the people who built it. From bespoke villas to grade-A
          office towers, our work is defined by structural rigour, design
          discipline and the unwavering trust of the families and brands we serve.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { Icon: Building2, label: "250+ delivered projects" },
            { Icon: Users, label: "140+ in-house team" },
            { Icon: Award, label: "ISO 9001:2015 certified" },
            { Icon: Wrench, label: "End-to-end execution" },
          ].map(({ Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-sm bg-accent text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-ink">{label}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/about" className="btn-ink">
            About Us <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-gold">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Why Choose Us */
function WhyChooseUs() {
  return (
    <section className="bg-muted/40 py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why choose us</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            The qualities that define every project we deliver.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[var(--shadow-card)]"
            >
              <span
                aria-hidden
                className="absolute right-0 top-0 h-16 w-16 origin-top-right -translate-y-8 translate-x-8 rotate-45 bg-gold/10 transition-all duration-500 group-hover:bg-gold/30"
              />
              <span className="relative grid h-14 w-14 place-items-center rounded-sm bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Packages */
function PackagesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Construction Packages</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Four ways to build the home you've imagined.
            </h2>
          </div>
          <Link to="/packages" className="btn-ink">
            All Packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((p, i) => (
            <Link
              key={p.slug}
              to="/packages/$slug"
              params={{ slug: p.slug }}
              className={`group relative flex flex-col rounded-sm border p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${
                i === 2
                  ? "border-gold bg-ink text-ink-foreground shadow-[var(--shadow-elegant)]"
                  : "border-border bg-card"
              }`}
            >
              {i === 2 && (
                <span className="absolute -top-3 left-7 rounded-sm bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-foreground">
                  Most chosen
                </span>
              )}
              <span className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${i === 2 ? "text-gold" : "text-gold"}`}>
                {p.tier}
              </span>
              <h3 className={`mt-3 font-display text-2xl font-bold ${i === 2 ? "text-white" : ""}`}>
                {p.name}
              </h3>
              <p className={`mt-3 text-sm ${i === 2 ? "text-white/70" : "text-muted-foreground"}`}>
                {p.summary}
              </p>
              <div className={`mt-6 font-display text-3xl font-bold ${i === 2 ? "text-gold" : "text-ink"}`}>
                {p.pricePerSqft}
              </div>
              <span
                className={`mt-auto pt-6 text-sm font-semibold uppercase tracking-wider ${
                  i === 2 ? "text-gold" : "text-ink"
                } group-hover:text-gold`}
              >
                Explore Package →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Services */
function ServicesSection() {
  return (
    <section className="bg-ink py-24 text-white lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-gold">What we do</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            End-to-end construction services
            <span className="text-gold">.</span>
          </h2>
          <p className="mt-4 text-white/65">
            From a single villa to a fifteen-storey tower — six service lines, one
            accountable team.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group relative isolate overflow-hidden rounded-sm"
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-white/75">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Featured Projects */
function FeaturedProjects() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Featured Projects</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              A portfolio built on trust and precision.
            </h2>
          </div>
          <Link to="/works" className="btn-ink">
            View All Works <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 6).map((p) => (
            <Link
              key={p.slug}
              to="/works/$slug"
              params={{ slug: p.slug }}
              className="group block overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-[var(--shadow-card)]"
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Stats */
function StatsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, color-mix(in oklab, var(--gold) 50%, transparent), transparent 60%)",
        }}
      />
      <div className="container-x relative grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="font-display text-5xl font-bold text-gold sm:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Testimonials */
function TestimonialsSection() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section className="bg-muted/40 py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Client Voices</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Trust earned, one project at a time.
          </h2>
        </div>
        <div className="mx-auto mt-14 max-w-3xl rounded-sm border border-border bg-card p-10 text-center shadow-[var(--shadow-card)]">
          <Quote className="mx-auto h-10 w-10 text-gold" />
          <blockquote className="mt-6 font-display text-xl italic leading-relaxed text-ink sm:text-2xl">
            “{t.quote}”
          </blockquote>
          <div className="mt-8">
            <div className="font-bold text-ink">{t.name}</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              {t.role}
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1 transition-all ${
                idx === i ? "w-10 bg-gold" : "w-5 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Recent gallery */
function RecentGallery() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Recent Works</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Snapshots from our latest builds.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {PROJECTS.slice(0, 8).map((p) => (
            <Link
              key={p.slug}
              to="/works/$slug"
              params={{ slug: p.slug }}
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/55" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {p.category}
                </div>
                <div className="mt-1 font-display text-sm font-bold">{p.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
