import { WaitlistPanel } from "@/app/components/WaitlistPanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrar",
};

export default function LoginPage() {
  return (
    <WaitlistPanel
      title="Bem-vindo(a) de volta"
      description="O app ainda não está aberto. Entre na lista de espera e avisamos quando liberar o acesso."
      alternateHref="/cadastro"
      alternateLabel="Criar conta"
      alternatePrompt="Não tem uma conta?"
    />
  );
}
