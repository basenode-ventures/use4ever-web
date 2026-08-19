import { REVEAL_MOMENTS } from "@/lib/content";

const washes = [
  "bg-[radial-gradient(circle_at_28%_20%,#f6edd4_0%,#d4b56a_38%,#8a3a32_100%)]",
  "bg-[linear-gradient(120deg,#efe6d2_0%,#7d8b72_48%,#24332d_100%)]",
  "bg-[conic-gradient(from_200deg_at_50%_50%,#c6a46a_0deg,#2f4038_140deg,#ede6d4_230deg,#7a1f2b_360deg)]",
  "bg-[radial-gradient(circle_at_50%_120%,#c6a46a_0%,#7a1f2b_28%,#141210_72%)]",
] as const;

export function FilmStrip() {
  return (
    <aside aria-label="Quando uma memória pode ser revelada">
      <div className="animate-fan bg-emulsion px-3 py-3 shadow-[0_24px_60px_rgb(0_0_0/0.4)] sm:px-4">
        <div className="mb-2 flex items-center justify-between px-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-fog/70">
            4ever · revelar
          </p>
          <p className="font-mono text-[10px] text-fog/40">35mm</p>
        </div>

        <ol className="flex gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-1 lg:gap-2.5 lg:overflow-visible lg:pb-0">
          {REVEAL_MOMENTS.map((moment, index) => (
            <li key={moment.when} className="min-w-[11.5rem] flex-1 lg:min-w-0">
              <div className="overflow-hidden bg-ink">
                <div
                  className={`animate-develop relative aspect-[16/9] ${washes[index]}`}
                  style={{ animationDelay: `${0.2 + index * 0.12}s` }}
                  aria-hidden="true"
                >
                  <span className="absolute bottom-1.5 right-2 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-3 bg-paper px-2.5 py-2 text-ink">
                  <span className="font-display text-sm leading-none">{moment.when}</span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-ink/50">
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
