import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
};

export default function TermsPage() {
  return (
    <div className="min-h-[80vh] bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h1 className="mb-8 text-4xl font-bold">Termos de Uso</h1>
            <p className="mb-4 text-gray-600">Última atualização: Março 2024</p>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">1. Aceitação dos Termos</h2>
            <p>
              Ao usar o use4ever, você concorda com estes termos. Nossa plataforma é dedicada ao
              compartilhamento privado de memórias entre familiares e amigos próximos. Se você não
              concordar com algum aspecto destes termos, por favor, não use nosso serviço.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">2. Uso do Serviço</h2>
            <div className="space-y-4">
              <p>Ao usar o use4ever, você concorda em:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Fornecer informações verdadeiras no cadastro</li>
                <li>Não compartilhar suas credenciais de acesso</li>
                <li>Não usar o serviço para atividades ilegais</li>
                <li>Respeitar a privacidade dos outros usuários</li>
                <li>Não compartilhar conteúdo ofensivo ou inadequado</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">3. Conteúdo e Propriedade</h2>
            <div className="space-y-4">
              <p>Sobre o conteúdo compartilhado:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Você mantém os direitos sobre todo conteúdo que compartilha</li>
                <li>Você é responsável pelo conteúdo que publica</li>
                <li>Concede-nos licença para armazenar e processar seu conteúdo</li>
                <li>Podemos remover conteúdo que viole nossos termos</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">4. Convites e Membros</h2>
            <div className="space-y-4">
              <p>Sobre o sistema de convites:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Você é responsável por quem convida para sua rede</li>
                <li>Convites são pessoais e intransferíveis</li>
                <li>Podemos limitar o número de convites por usuário</li>
                <li>Reservamos o direito de cancelar convites suspeitos</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">5. Limitação de Responsabilidade</h2>
            <div className="space-y-4">
              <p>O use4ever:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>É fornecido &quot;como está&quot;, sem garantias específicas</li>
                <li>Pode sofrer alterações ou interrupções ocasionais</li>
                <li>Não se responsabiliza por conteúdo gerado por usuários</li>
                <li>Mantém backups regulares, mas não garante recuperação total</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">6. Modificações dos Termos</h2>
            <p>
              Podemos atualizar estes termos ocasionalmente. Alterações significativas serão
              notificadas por e-mail. O uso continuado após mudanças implica em aceitação dos novos
              termos.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">7. Contato</h2>
            <p>
              Para dúvidas sobre estes termos, entre em contato através do e-mail:
              contato@use4ever.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
