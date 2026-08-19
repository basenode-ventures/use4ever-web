import { PLANS, PRICING_SECTION } from "@/lib/content";
import Link from "next/link";

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-paper/10">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass">
            {PRICING_SECTION.eyebrow}
          </h2>
          <p className="mt-4 font-display text-4xl leading-tight text-paper sm:text-5xl">
            {PRICING_SECTION.title}
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-fog">
            {PRICING_SECTION.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col justify-between p-8 ${
                plan.featured
                  ? "bg-paper text-ink shadow-[0_20px_50px_rgb(0_0_0/0.25)] lg:-translate-y-3"
                  : "border border-paper/15 bg-verdigris-deep text-paper"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl">{plan.name}</h3>
                  {plan.featured ? (
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-wax">
                      Popular
                    </span>
                  ) : null}
                </div>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    plan.featured ? "text-ink/65" : "text-fog"
                  }`}
                >
                  {plan.description}
                </p>
                <p className="mt-8 flex items-baseline gap-1">
                  <span className="font-display text-4xl tracking-tight">{plan.price}</span>
                  {plan.period ? (
                    <span
                      className={`font-mono text-[11px] ${
                        plan.featured ? "text-ink/50" : "text-mist"
                      }`}
                    >
                      {plan.period}
                    </span>
                  ) : null}
                </p>
                <ul className="mt-8 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6">
                      <span
                        aria-hidden="true"
                        className={plan.featured ? "text-wax" : "text-brass"}
                      >
                        ▸
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/cadastro"
                className={`mt-10 block px-5 py-3 text-center font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  plan.featured
                    ? "bg-wax text-paper hover:bg-ink"
                    : "border border-brass/40 text-paper hover:bg-brass hover:text-ink"
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
