import { FEATURES, FEATURES_SECTION } from "@/lib/content";

export function Features() {
  return (
    <section id="features" className="border-t border-paper/10 bg-verdigris-deep">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass">
            {FEATURES_SECTION.eyebrow}
          </h2>
          <p className="mt-4 font-display text-4xl leading-tight text-paper sm:text-5xl">
            {FEATURES_SECTION.title}
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-fog">
            {FEATURES_SECTION.subtitle}
          </p>
        </div>

        <dl className="mt-16 grid gap-x-16 gap-y-14 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div key={feature.name} className="border-t border-paper/15 pt-6">
              <dt className="font-display text-2xl text-paper">{feature.name}</dt>
              <dd className="mt-3 max-w-sm text-sm leading-relaxed text-fog">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
