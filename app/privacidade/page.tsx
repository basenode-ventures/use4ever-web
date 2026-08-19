import { PageSheet } from "@/app/components/PageSheet";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function PrivacyPage() {
  return (
    <PageSheet>
        <div className="space-y-12 text-sm leading-7 text-ink/80">
          <div>
            <h1 className="mb-4 font-display text-4xl text-ink">Política de Privacidade</h1>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
              Última atualização: Agosto 2026
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ink">1. Escopo</h2>
            <p>
              Esta política cobre o site use4ever.com e a lista de espera por e-mail. Ainda não há
              cadastro, login, armazenamento de memórias nem cobrança neste domínio. Quando o
              produto estiver disponível, atualizaremos esta página.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ink">2. Dados que podemos receber</h2>
            <div className="space-y-4">
              <p>Hoje, o canal principal é o e-mail. Podemos receber:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Seu endereço de e-mail e o que você escrever na mensagem</li>
                <li>Dados técnicos básicos do navegador (como logs de servidor do provedor de hosting)</li>
              </ul>
              <p>
                Não pedimos foto de perfil, biografia, rede familiar nem upload de mídia neste site.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ink">3. Como usamos</h2>
            <div className="space-y-4">
              <p>Usamos o que você envia para:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Responder e organizar a lista de espera</li>
                <li>Avisar sobre o andamento do produto, se você quiser</li>
                <li>Melhorar o site institucional</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ink">4. Compartilhamento</h2>
            <p>
              Não vendemos seus dados. Só compartilhamos o necessário com provedores que fazem o
              site ou o e-mail funcionarem (por exemplo, hospedagem). Não reivindicamos criptografia
              de vault nem banco de memórias neste estágio — isso ainda não existe aqui.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ink">5. Seus direitos</h2>
            <div className="space-y-4">
              <p>Você pode:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Pedir o que temos sobre você a partir do seu e-mail</li>
                <li>Pedir correção ou exclusão da lista de espera</li>
                <li>Pedir para não receber mais atualizações</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ink">6. Contato</h2>
            <p>
              Privacidade: contato@use4ever.com
            </p>
          </section>
        </div>
    </PageSheet>
  );
}
