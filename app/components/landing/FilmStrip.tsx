import { REVEAL_MOMENTS } from "@/lib/content";

const washes = [
  "bg-[radial-gradient(circle_at_30%_20%,#c6a46a_0%,#7a1f2b_42%,#1c1916_100%)]",
  "bg-[linear-gradient(135deg,#2f4038_0%,#c6a46a_46%,#ede6d4_100%)]",
  "bg-[radial-gradient(circle_at_70%_80%,#ede6d4_0%,#2f4038_55%,#141210_100%)]",
  "bg-[linear-gradient(180deg,#141210_0%,#7a1f2b_70%,#1c1916_100%)]",
] as const;

export function FilmStrip() {
  return (
    <aside
      className="animate-fan mx-auto w-full max-w-[280px] lg:mx-0"
      style={{ ["--tilt" as string]: "2deg" }}
      aria-label="Quando uma memória pode ser revelada"
    >
      <div className="relative bg-emulsion px-5 py-4 shadow-[0_24px_60px_rgb(0_0_0/0.35)]">
        <div className="film-sprockets pointer-events-none absolute inset-y-0 left-1 w-2" />
        <div className="film-sprockets pointer-events-none absolute inset-y-0 right-1 w-2" />

        <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-fog/70">
          4ever · revelar
        </p>

        <ol className="space-y-3">
          {REVEAL_MOMENTS.map((moment, index) => (
            <li key={moment.when}>
              <div className="overflow-hidden bg-ink">
                <div
                  className={`animate-develop relative aspect-[5/3] ${washes[index]}`}
                  style={{ animationDelay: `${0.35 + index * 0.18}s` }}
                  aria-hidden="true"
                />
                <div className="flex items-baseline justify-between gap-3 bg-paper px-2.5 py-2 text-ink">
                  <span className="font-display text-sm leading-none">{moment.when}</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink/55">
                    {moment.note}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}
