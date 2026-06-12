import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { LOGO_URL, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vetrivel Constructions" },
      {
        name: "description",
        content:
          "Speak with the Vetrivel Constructions team. Free site visits, free quotes, no obligation.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something that lasts."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="container-x py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact info */}
          <aside className="rounded-sm bg-ink p-10 text-white">
            <img
              src={LOGO_URL}
              alt={`${SITE.name} logo`}
              className="h-20 w-20 rounded-sm bg-white p-1 object-contain"
            />
            <h2 className="mt-6 font-display text-2xl font-bold">Reach our team directly.</h2>
            <p className="mt-3 text-sm text-white/70">
              We respond within 4 working hours. Site visits are free, anywhere in Tamil
              Nadu, Karnataka or Andhra Pradesh.
            </p>

            <ul className="mt-10 space-y-6 text-sm">
              <ContactRow Icon={MapPin} label="Office">
                {SITE.address}
              </ContactRow>
              <ContactRow Icon={Phone} label="Call us">
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold">
                  {SITE.phoneDisplay}
                </a>
              </ContactRow>
              <ContactRow Icon={Mail} label="Email">
                <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                  {SITE.email}
                </a>
              </ContactRow>
              <ContactRow Icon={Clock} label="Hours">
                {SITE.hours}
              </ContactRow>
            </ul>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <a href={`tel:${SITE.phoneRaw}`} className="btn-gold !px-3 !text-xs">
                <Phone className="h-4 w-4" /> Call
              </a>
              <a href={`mailto:${SITE.email}`} className="btn-ghost-light !px-3 !text-xs">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href={`https://wa.me/${SITE.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-light !px-3 !text-xs"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </aside>

          {/* Form */}
          <div className="rounded-sm border border-border bg-card p-10">
            <span className="eyebrow">Send a message</span>
            <h2 className="mt-3 font-display text-3xl font-bold">
              Tell us about your project.
            </h2>
            {submitted ? (
              <div className="mt-10 rounded-sm border border-gold/30 bg-gold/10 p-8 text-center">
                <h3 className="font-display text-2xl font-bold text-ink">Thank you!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We've received your message and will respond within 4 working hours.
                </p>
              </div>
            ) : (
              <form
                className="mt-8 grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" required />
                  <Field label="Phone Number" name="phone" type="tel" required />
                </div>
                <Field label="Email Address" name="email" type="email" required />
                <Field label="Project Type / Location" name="subject" />
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                    placeholder="Tell us about your plot, scope and budget…"
                  />
                </div>
                <button type="submit" className="btn-gold mt-2 justify-self-start">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="container-x">
          <div className="overflow-hidden rounded-sm border border-border">
            <iframe
              title="Vetrivel Constructions location"
              src="https://www.google.com/maps?q=Anna%20Salai%20Chennai&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  Icon,
  label,
  children,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-gold text-gold-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
          {label}
        </div>
        <div className="mt-1 leading-relaxed text-white/90">{children}</div>
      </div>
    </li>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
