import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building,
  Check,
  Handshake,
  LineChart,
  ScrollText,
  Search,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/lib/site-data";
import p2 from "@/assets/project-2.jpg";

export const Route = createFileRoute("/joint-venture")({
  head: () => ({
    meta: [
      { title: "Joint Venture — Vetrivel Constructions" },
      {
        name: "description",
        content:
          "Partner with Vetrivel Constructions to unlock the full value of your land — through transparent, fairly-structured joint ventures.",
      },
    ],
  }),
  component: JVPage,
});

const BENEFITS = [
  { Icon: LineChart, title: "Maximum Land Value", text: "We engineer the FSI, design and product mix to extract the highest possible return from your site." },
  { Icon: Handshake, title: "Fair Revenue Share", text: "Transparent area-share or revenue-share agreements, structured around your goals." },
  { Icon: Building, title: "Zero Construction Risk", text: "We carry all execution, statutory and market risk. You retain ownership of your share." },
  { Icon: Users, title: "Proven Track Record", text: "22+ years, 250+ delivered projects, and a balance sheet developers and landowners trust." },
];

const PROCESS = [
  { step: "01", Icon: Search, title: "Land Evaluation", text: "We assess title, FSI, market positioning and product viability — all at our cost." },
  { step: "02", Icon: ScrollText, title: "Term Sheet", text: "We agree commercial terms — area share, timelines, approvals responsibility, exit clauses." },
  { step: "03", Icon: Building, title: "Design & Approvals", text: "Architecture, structural design and statutory approvals — managed by our in-house team." },
  { step: "04", Icon: Handshake, title: "Execution & Handover", text: "Construction, marketing and handover, with monthly transparency reports throughout." },
];

function JVPage() {
  return (
    <>
      <PageHero
        eyebrow="Joint Venture"
        title="Partner with us. Unlock the full value of your land."
        crumbs={[{ label: "Home", to: "/" }, { label: "Joint Venture" }]}
        image={p2}
      />

      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2">
        <div>
          <span className="eyebrow"><span className="gold-rule" /> Why partner</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            A joint venture with Vetrivel turns dormant land into a delivered asset.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            For over two decades we've partnered with landowners across Chennai, Bengaluru
            and Coimbatore — structuring fair, transparent agreements that monetise land
            without forcing a sale. You bring the land. We bring the capital, design,
            execution and market access.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "No upfront cost to landowner",
              "Joint marketing & sales",
              "Construction-linked area / revenue share",
              "Fully RERA-compliant agreements",
            ].map((l) => (
              <li key={l} className="flex gap-3 text-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> {l}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-sm bg-ink p-10 text-white">
          <h3 className="font-display text-2xl font-bold text-gold">Have land to develop?</h3>
          <p className="mt-3 text-sm text-white/70">
            Send us your site details. Our acquisitions team will respond with an indicative
            JV proposal within 7 business days — at no cost or obligation.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">Direct Line</div>
              <a href={`tel:${SITE.phoneRaw}`} className="mt-1 block font-display text-2xl font-bold text-white hover:text-gold">
                {SITE.phoneDisplay}
              </a>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">Email</div>
              <a href={`mailto:${SITE.email}`} className="mt-1 block font-bold hover:text-gold">
                {SITE.email}
              </a>
            </div>
          </div>
          <Link to="/contact" className="btn-gold mt-8 w-full">
            Submit Land Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Benefits</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Why landowners choose us over a direct sale.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-sm border border-border bg-card p-7">
                <span className="grid h-12 w-12 place-items-center rounded-sm bg-gold text-gold-foreground">
                  <b.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The Process</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Four clear steps from your first call to handover.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <div
              key={p.step}
              className="group relative rounded-sm border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold"
            >
              <div className="font-display text-5xl font-bold text-gold/30 transition-colors group-hover:text-gold/80">
                {p.step}
              </div>
              <span className="mt-4 inline-grid h-12 w-12 place-items-center rounded-sm bg-ink text-gold">
                <p.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
