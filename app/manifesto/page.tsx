import { PageSheet } from "@/app/components/PageSheet";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosso Manifesto",
};

export default function ManifestoPage() {
  return (
    <PageSheet width="wide">
      <div className="space-y-10">
        <h1 className="font-display text-5xl leading-none sm:text-6xl">Nosso Manifesto</h1>

        <div className="space-y-8 font-display text-2xl leading-snug sm:text-3xl">
          <p>
            Algumas memórias não cabem em um feed. Elas pedem silêncio, intenção e um{" "}
            <span className="mark-word">momento certo</span> para chegar — hoje, daqui a anos, ou
            quando não estivermos mais aqui.
          </p>

          <p>
            O use4ever é uma <span className="mark-word">cápsula do tempo</span> de memórias
            afetivas. Você grava um vídeo, um áudio, escreve uma carta ou deixa uma foto — e
            escolhe <span className="mark-word">quando</span> e{" "}
            <span className="mark-word">para quem</span> aquela memória será revelada.
          </p>

          <p>
            Pode ser agora. Em uma data. Todo ano. Depois da morte. Com um atraso póstumo. Ou
            quando a pessoa atingir certa idade. A ideia é simples: o que importa não some no
            ruído — espera o seu tempo.
          </p>

          <p>
            Ainda estamos construindo. Este site é a lista de espera. Se a proposta fizer sentido
            para você, deixe seu contato. Queremos cuidar disso com a seriedade que{" "}
            <span className="mark-word">memórias</span> merecem.
          </p>
        </div>
      </div>
    </PageSheet>
  );
}
