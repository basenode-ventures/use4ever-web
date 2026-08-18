import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/content";
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
    <div className="flex min-h-[80vh] flex-col justify-center px-6">
      <div className="mx-auto w-full max-w-[420px] space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 text-center">
          <p className="text-sm leading-6 text-gray-600">
            Estamos em lista de espera. Ainda não há app, contas nem cobrança — envie um e-mail e
            entraremos em contato.
          </p>
          <Button asChild className="w-full rounded-full">
            <a href={`mailto:${CONTACT_EMAIL}?subject=Lista%20de%20espera%20use4ever`}>
              Entrar na lista de espera
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">
            Ou escreva para{" "}
            <a className="text-primary hover:text-primary/90" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          {alternatePrompt}{" "}
          <Link href={alternateHref} className="text-primary hover:text-primary/90">
            {alternateLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
