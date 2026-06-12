import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to?: string };

export function PageHero({
  title,
  eyebrow,
  crumbs,
  image,
}: {
  title: string;
  eyebrow?: string;
  crumbs?: Crumb[];
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at top right, color-mix(in oklab, var(--gold) 60%, transparent), transparent 60%)",
          }}
        />
      )}
      <div className="container-x relative py-24 sm:py-28 lg:py-36">
        {eyebrow && (
          <span className="eyebrow text-gold/90">{eyebrow}</span>
        )}
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {crumbs && crumbs.length > 0 && (
          <nav className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/70">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="hover:text-gold">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
