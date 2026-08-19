import { CONTACT_EMAIL } from "@/lib/content";
import { PageSheet } from "@/app/components/PageSheet";
import Link from "next/link";

type WaitlistPanelProps = {
  title: string;
  description: string;
  alternateHref: string;
  alternateLabel: string;
  alternatePrompt: string;
};

export function WaitlistPanel({
  title,
  description,
  alternateHref,
  alternateLabel,
  alternatePrompt,
}: WaitlistPanelProps) {
  return (
    <PageSheet>
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-verdigris">Carta</p>
          <h1 className="font-display text-4xl leading-tight">{title}</h1>
          <p className="text-sm leading-relaxed text-ink/70">{description}</p>
        </div>

        <div className="space-y-5 border-t border-ink/10 pt-8">
          <p className="text-sm leading-7 text-ink/75">
            Estamos em lista de espera. Ainda não há app, contas nem cobrança — envie um e-mail e
            entraremos em contato.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Lista%20de%20espera%20use4ever`}
            className="inline-block bg-verdigris px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-verdigris-deep"
          >
            Entrar na lista de espera
          </a>
          <p className="font-mono text-[11px] text-ink/50">
            Ou escreva para{" "}
            <a className="text-verdigris underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <p className="text-sm text-ink/55">
          {alternatePrompt}{" "}
          <Link href={alternateHref} className="text-verdigris underline-offset-4 hover:underline">
            {alternateLabel}
          </Link>
        </p>
      </div>
    </PageSheet>
  );
}
