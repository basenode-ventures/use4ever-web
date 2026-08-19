import { WaitlistPanel } from "@/app/components/WaitlistPanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista de espera",
};

export default function CadastroPage() {
  return (
    <WaitlistPanel
      title="Lista de espera"
      description="Quer ser avisado quando a cápsula do tempo estiver pronta? Escreva para nós."
      alternateHref="/manifesto"
      alternateLabel="Ler o manifesto"
      alternatePrompt="Quer conhecer a ideia?"
    />
  );
}
