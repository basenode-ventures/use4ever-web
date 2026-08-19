import { WaitlistPanel } from "@/app/components/WaitlistPanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista de espera",
};

export default function LoginPage() {
  return (
    <WaitlistPanel
      title="Lista de espera"
      description="Ainda não há login. Este espaço é só para entrar na lista e acompanhar o lançamento."
      alternateHref="/cadastro"
      alternateLabel="Voltar à lista"
      alternatePrompt="Prefere o atalho principal?"
    />
  );
}
