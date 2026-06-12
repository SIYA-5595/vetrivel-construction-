import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LOGO_URL, NAV, SITE } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-ink text-ink-foreground lg:block">
        <div className="container-x flex h-9 items-center justify-between text-[12px]">
          <span className="tracking-wide text-white/70">
            {SITE.tagline} · {SITE.hours}
          </span>
          <span className="tracking-wide text-white/70">
            Email: <a className="hover:text-gold" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full bg-white transition-shadow ${
          scrolled ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]" : "shadow-[0_1px_0_0_var(--color-border)]"
        }`}
      >
        <div className="container-x grid h-20 grid-cols-[auto_1fr_auto] items-center gap-6 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label={SITE.name}>
            <img
              src={LOGO_URL}
              alt={`${SITE.name} logo`}
              className="h-14 w-14 object-contain lg:h-16 lg:w-16"
              width={64}
              height={64}
            />
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-lg font-bold tracking-tight text-ink">
                VETRIVEL
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                Constructions
              </span>
            </div>
          </Link>

          {/* Center nav */}
          <nav className="hidden items-center justify-center gap-7 xl:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="group relative text-sm font-semibold uppercase tracking-wider text-ink/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3 justify-self-end">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="hidden items-center gap-3 lg:flex"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-gold-foreground transition-transform group-hover:rotate-12">
                <Phone className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Call Anytime
                </span>
                <span className="text-sm font-bold tracking-wide text-ink">
                  {SITE.phoneDisplay}
                </span>
              </span>
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-sm border border-ink/10 text-ink transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white p-7 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <img src={LOGO_URL} alt="" className="h-10 w-10 object-contain" />
              <span className="font-display text-base font-bold">VETRIVEL</span>
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-sm border border-ink/10 hover:border-gold hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="border-b border-ink/5 py-4 text-base font-semibold uppercase tracking-wider text-ink hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="mt-8 flex items-center gap-3 rounded-sm bg-ink p-4 text-white"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-gold-foreground">
              <Phone className="h-4 w-4" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                Call Anytime
              </span>
              <span className="text-sm font-bold">{SITE.phoneDisplay}</span>
            </span>
          </a>
        </aside>
      </div>
    </>
  );
}
