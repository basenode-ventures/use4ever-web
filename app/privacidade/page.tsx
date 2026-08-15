import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-[80vh] bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h1 className="mb-8 text-4xl font-bold">Política de Privacidade</h1>
            <p className="mb-4 text-gray-600">Última atualização: Março 2024</p>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">1. Dados que Coletamos</h2>
            <div className="space-y-4">
              <p>Para fornecer nossa plataforma de compartilhamento privado, coletamos:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Informações de cadastro (nome e e-mail)</li>
                <li>Foto de perfil e biografia (opcional)</li>
                <li>Conteúdo compartilhado (fotos, vídeos e textos)</li>
                <li>Dados de conexões familiares (convites enviados/recebidos)</li>
                <li>Metadados de uso da plataforma</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">2. Como Usamos seus Dados</h2>
            <div className="space-y-4">
              <p>Seus dados são utilizados para:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Manter sua conta e perfil</li>
                <li>Processar e armazenar seu conteúdo de forma segura</li>
                <li>Gerenciar conexões com familiares e amigos</li>
                <li>Enviar notificações sobre novos conteúdos e interações</li>
                <li>Melhorar a experiência da plataforma</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">3. Compartilhamento e Segurança</h2>
            <div className="space-y-4">
              <p>Nosso compromisso com sua privacidade:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Seu conteúdo é visível apenas para pessoas que você explicitamente convidar</li>
                <li>Utilizamos criptografia para proteger seus dados</li>
                <li>Não vendemos ou compartilhamos seus dados com terceiros</li>
                <li>Aplicamos políticas rigorosas de acesso a nível de banco de dados</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">4. Seus Direitos</h2>
            <div className="space-y-4">
              <p>Você tem direito a:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Acessar todos os seus dados armazenados</li>
                <li>Solicitar correção de informações incorretas</li>
                <li>Excluir sua conta e todos os dados associados</li>
                <li>Exportar seus dados em formato acessível</li>
                <li>Revogar acesso de conexões a qualquer momento</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">5. Contato</h2>
            <p>
              Para questões sobre privacidade ou exercício de seus direitos, entre em contato
              através do e-mail: contato@use4ever.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
