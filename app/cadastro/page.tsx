import { WaitlistPanel } from "@/app/components/WaitlistPanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista de espera",
};

export default function CadastroPage() {
  return (
    <WaitlistPanel
      title="Lista de espera"
      description="Seja um dos primeiros a compartilhar momentos com sua família"
      alternateHref="/login"
      alternateLabel="Entrar"
      alternatePrompt="Já tem uma conta?"
    />
  );
}
