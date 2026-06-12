import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { LOGO_URL, NAV, SERVICES, SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt={`${SITE.name} logo`}
              className="h-16 w-16 bg-white/95 object-contain rounded-sm p-1"
            />
            <div className="leading-tight">
              <div className="font-display text-xl font-bold">VETRIVEL</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                Constructions
              </div>
            </div>
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-white/65">
            Building landmarks across South India for over two decades. Engineered to last,
            crafted to inspire — every project carries our signature of trust and precision.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
              { Icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
              { Icon: Linkedin, href: SITE.social.linkedin, label: "LinkedIn" },
              { Icon: Youtube, href: SITE.social.youtube, label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-sm border border-white/15 text-white/70 transition-all hover:border-gold hover:bg-gold hover:text-gold-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="mt-6 space-y-3">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-white/65 transition-colors hover:text-gold"
                >
                  → {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <FooterHeading>Services</FooterHeading>
          <ul className="mt-6 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm text-white/65 transition-colors hover:text-gold"
                >
                  → {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <FooterHeading>Get in Touch</FooterHeading>
          <ul className="mt-6 space-y-4">
            <li className="flex gap-3 text-sm text-white/65">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {SITE.address}
            </li>
            <li className="flex gap-3 text-sm text-white/65">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-gold" />
              <div className="flex flex-col gap-1">
                {(SITE as any).phoneNumbers.map((phone: string) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="hover:text-gold"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex gap-3 text-sm text-white/65">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Trust is the base of our Business.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
        {children}
      </h4>
      <span className="mt-3 block h-[2px] w-10 bg-gold" />
    </div>
  );
}
