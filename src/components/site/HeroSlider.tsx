import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { HERO_IMAGES, SITE } from "@/lib/site-data";

const INTERVAL_MS = 30_000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate h-[92vh] min-h-[640px] w-full overflow-hidden bg-ink text-white">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <img
            src={src}
            alt=""
            className={`h-full w-full object-cover ${i === index ? "animate-kenburns" : ""}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/20" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/90 to-transparent"
      />

      <div className="container-x relative grid h-full place-items-center sm:place-items-start sm:pt-32 lg:pt-40">
        <div key={index} className="max-w-3xl animate-fade-up text-center sm:text-left">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold" />
            Premium Construction Since 2002
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl">
            {SITE.name.split(" ")[0].toUpperCase()}
            <br />
            <span className="text-gold">CONSTRUCTIONS</span>
          </h1>
          <p className="mt-6 font-display text-xl italic text-white/85 sm:text-2xl">
            {SITE.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:mx-0">
            Building excellence through quality construction — homes, towers and landmarks
            engineered to outlast a generation.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-stretch">
            <Link to="/contact" className="btn-gold">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/works" className="btn-ghost-light">
              View Projects
            </Link>
          </div>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="mt-10 inline-flex items-center gap-3 text-sm text-white/75 hover:text-gold"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/30">
              <Phone className="h-4 w-4" />
            </span>
            Speak to our team · {SITE.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:left-auto sm:right-12 sm:translate-x-0">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-500 ${
              i === index ? "w-10 bg-gold" : "w-5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
