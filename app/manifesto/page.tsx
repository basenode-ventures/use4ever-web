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
            Algumas memórias não cabem em um feed. Elas pedem silêncio, intenção e um{" "}
            <span className="bg-primary px-2 text-white">momento certo</span> para chegar — hoje,
            daqui a anos, ou quando não estivermos mais aqui.
          </p>

          <p className="text-4xl">
            O use4ever é uma{" "}
            <span className="bg-primary px-2 text-white">cápsula do tempo</span> de memórias
            afetivas. Você grava um vídeo, um áudio, escreve uma carta ou deixa uma foto — e
            escolhe{" "}
            <span className="bg-primary px-2 text-white">quando</span> e{" "}
            <span className="bg-primary px-2 text-white">para quem</span> aquela memória será
            revelada.
          </p>

          <p className="text-4xl">
            Pode ser agora. Em uma data. Todo ano. Depois da morte. Com um atraso póstumo. Ou
            quando a pessoa atingir certa idade. A ideia é simples: o que importa não some no
            ruído — espera o seu tempo.
          </p>

          <p className="text-4xl">
            Ainda estamos construindo. Este site é a lista de espera. Se a proposta fizer sentido
            para você, deixe seu contato. Queremos cuidar disso com a seriedade que{" "}
            <span className="bg-primary px-2 text-white">memórias</span> merecem.
          </p>
        </div>
      </div>
    </div>
  );
}
