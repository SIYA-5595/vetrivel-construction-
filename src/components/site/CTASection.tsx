import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, color-mix(in oklab, var(--gold) 55%, transparent), transparent 55%), radial-gradient(ellipse at 10% 90%, color-mix(in oklab, var(--gold) 35%, transparent), transparent 50%)",
        }}
      />
      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="eyebrow text-gold/90">Start your project</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Get your dream project <br />
            started today.
          </h2>
          <p className="mt-5 max-w-xl text-base text-white/70">
            Book a no-obligation consultation with one of our project leads. We'll walk you
            through your site, scope and budget — and give you a written quote within 7 days.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
          <Link to="/contact" className="btn-gold">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/packages" className="btn-ghost-light">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
