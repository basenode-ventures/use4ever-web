import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosso Manifesto",
};

export default function ManifestoPage() {
  return (
    <div className="min-h-[80vh] bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="space-y-8 text-xl leading-relaxed">
          <h1 className="text-4xl font-bold">Nosso Manifesto</h1>

          <p className="text-4xl">
            Vivemos em uma era onde tudo é efêmero. Mensagens são apagadas automaticamente, fotos
            são perdidas em feeds infinitos, e momentos importantes se perdem em meio ao ruído das
            redes sociais. A realidade é que a vida é{" "}
            <span className="bg-primary px-2 text-white">breve</span> e nosso tempo com quem amamos
            é <span className="bg-primary px-2 text-white">finito</span>.
          </p>

          <p className="text-4xl">
            Estudos mostram que revisitar memórias fortalece laços familiares e contribui para o
            bem-estar emocional. Não se trata apenas de nostalgia - é sobre construir um{" "}
            <span className="bg-primary px-2 text-white">legado digital</span> significativo para
            nossa família.
          </p>

          <p className="text-4xl">
            O use4ever nasceu dessa necessidade{" "}
            <span className="bg-primary px-2 text-white">fundamental</span>: criar um espaço
            dedicado e permanente para preservar o que realmente importa. Um lugar onde cada foto,
            vídeo e mensagem é armazenado com propósito, acessível apenas para as pessoas certas, e
            preservado para as próximas gerações.
          </p>

          <p className="text-4xl">
            Não podemos parar o tempo, mas podemos garantir que nossas{" "}
            <span className="bg-primary px-2 text-white">memórias</span> e{" "}
            <span className="bg-primary px-2 text-white">histórias</span> sejam preservadas. De
            forma segura, privada e permanente.
          </p>
        </div>
      </div>
    </div>
  );
}
