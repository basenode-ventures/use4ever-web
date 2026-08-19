import { PageSheet } from "@/app/components/PageSheet";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
};

export default function TermsPage() {
  return (
    <PageSheet>
        <div className="space-y-12 text-sm leading-7 text-ink/80">
          <div>
            <h1 className="mb-4 font-display text-4xl text-ink">Termos de Uso</h1>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
              Última atualização: Agosto 2026
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ink">1. Sobre este site</h2>
            <p>
              O use4ever.com é o site institucional e de lista de espera do use4ever — uma cápsula
              do tempo de memórias afetivas em construção. Ao navegar nestas páginas ou escrever
              para contato@use4ever.com, você concorda com estes termos. Ainda não há app público,
              contas ativas nem cobrança neste site.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ink">2. Lista de espera</h2>
            <div className="space-y-4">
              <p>Ao entrar em contato para a lista de espera, você concorda em:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Usar um e-mail verdadeiro e seu</li>
                <li>Não enviar conteúdo ilegal, ofensivo ou spam</li>
                <li>Entender que a inscrição não garante acesso imediato ao produto</li>
                <li>Receber eventuais atualizações sobre o lançamento</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ink">3. O produto em construção</h2>
            <p>
              Descrevemos a intenção do produto — gravar memórias (vídeo, áudio, carta, foto) e
              escolher quando e para quem serão reveladas, inclusive após a morte. Planos e preços
              exibidos são previstos e ilustrativos; não constituem oferta comercial ativa nem
              garantia de entrega de funcionalidades ainda não lançadas.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ink">4. Propriedade intelectual</h2>
            <p>
              Marca, textos e design deste site pertencem ao use4ever. Você mantém os direitos
              sobre qualquer conteúdo que nos envie por e-mail; só o usamos para responder e
              organizar a lista de espera.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ink">5. Limitação de responsabilidade</h2>
            <div className="space-y-4">
              <p>Neste estágio:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>O site é fornecido &quot;como está&quot;</li>
                <li>Pode haver interrupções ou mudanças de conteúdo</li>
                <li>Não prometemos prazos de lançamento</li>
                <li>Não há vault, login ou entrega de memórias em produção neste domínio</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ink">6. Modificações</h2>
            <p>
              Podemos atualizar estes termos. A data no topo desta página indica a versão vigente.
              O uso continuado do site após mudanças implica aceitação dos novos termos.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ink">7. Contato</h2>
            <p>
              Dúvidas: contato@use4ever.com
            </p>
          </section>
        </div>
    </PageSheet>
  );
}
