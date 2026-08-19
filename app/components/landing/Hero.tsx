import { FilmStrip } from "@/app/components/landing/FilmStrip";
import { HERO } from "@/lib/content";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.72fr)] lg:gap-16 lg:pb-28 lg:pt-20">
        <div>
          <p className="animate-rise font-mono text-[11px] uppercase tracking-[0.28em] text-verdigris">
            Cápsula de memórias afetivas
          </p>
          <h1 className="animate-rise mt-6 font-display text-[3.25rem] leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            {HERO.titleLine1}
            <br />
            <em className="font-light text-verdigris">{HERO.titleLine2}</em>
          </h1>
          <p
            className="animate-rise mt-8 max-w-md text-base leading-relaxed text-fog sm:text-lg"
            style={{ animationDelay: "0.12s" }}
          >
            {HERO.description}
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ animationDelay: "0.22s" }}
          >
            <Link
              href="/cadastro"
              className="bg-verdigris px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-verdigris-deep"
            >
              {HERO.cta}
            </Link>
            <Link
              href="/manifesto"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist transition-colors hover:text-verdigris"
            >
              {HERO.learnMore} →
            </Link>
          </div>
        </div>

        <FilmStrip />
      </div>
    </section>
  );
}
