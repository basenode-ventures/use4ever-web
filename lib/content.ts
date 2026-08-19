export const SITE_URL = "https://use4ever.com";
export const WORDMARK = "use4ever";
export const CONTACT_EMAIL = "contato@use4ever.com";
export const TAGLINE = "Suas memórias, para sempre.";

export const SITE_DESCRIPTION =
  "Uma cápsula do tempo de memórias afetivas. Grave vídeo, áudio, uma carta ou uma foto — e escolha quando e para quem cada memória será revelada.";

export const HERO = {
  titleLine1: "Suas memórias,",
  titleLine2: "para sempre.",
  description: SITE_DESCRIPTION,
  cta: "Entrar na lista de espera",
  learnMore: "Saiba mais",
} as const;

export const FEATURES_SECTION = {
  eyebrow: "A cápsula",
  title: "Memórias com um quando e um quem",
  subtitle:
    "O use4ever é pensado para guardar o que importa e revelá-lo no momento certo — hoje, em uma data, todo ano, ou depois.",
} as const;

export const REVEAL_MOMENTS = [
  { when: "Agora", note: "Chega hoje" },
  { when: "Em uma data", note: "Espera o dia" },
  { when: "Todo ano", note: "Volta no mesmo dia" },
  { when: "Depois", note: "Quando você não estiver" },
] as const;

export const FEATURES = [
  {
    name: "O que você guarda",
    description:
      "Grave um vídeo, um áudio, escreva uma carta ou deixe uma foto. Cada memória fica no formato em que você a sentiu.",
  },
  {
    name: "Quando revelar",
    description:
      "Agora, em uma data, todo ano, após a morte do dono, com atraso póstumo, ou quando o destinatário atingir certa idade.",
  },
  {
    name: "Para quem",
    description:
      "Escolha a pessoa — ou o círculo — que deve receber cada memória. Nada é espalhado; só chega a quem você indicar.",
  },
  {
    name: "Intenção além da vida",
    description:
      "A ideia inclui deixar algo para depois. Ainda estamos construindo isso; o site é a lista de espera do produto.",
  },
] as const;

export const PRICING_SECTION = {
  eyebrow: "PLANOS",
  title: "Como imaginamos os planos",
  subtitle:
    "Valores previstos — ainda não há cobrança. Entre na lista e avisamos quando o produto estiver pronto.",
} as const;

export const PLANS = [
  {
    name: "Essencial",
    price: "Grátis",
    period: "",
    description: "Para começar a guardar memórias no seu ritmo.",
    features: [
      "Cápsula individual",
      "Vídeo, áudio, carta e foto",
      "Escolha de quando e para quem",
    ],
    cta: "Entrar na lista de espera",
    featured: false,
  },
  {
    name: "Eterno",
    price: "R$ 19,90",
    period: "/mês",
    description: "Para quem quer cuidar das memórias com mais espaço e intenção.",
    features: [
      "Tudo do Essencial",
      "Mais espaço para memórias",
      "Revelações por data, idade e aniversário",
      "Pensado para o legado pessoal",
    ],
    cta: "Entrar na lista de espera",
    featured: true,
  },
  {
    name: "Família",
    price: "R$ 39,90",
    period: "/mês",
    description: "Para um círculo próximo que guarda memórias juntos.",
    features: [
      "Tudo do Eterno",
      "Círculo familiar compartilhado",
      "Vários autores no mesmo legado",
      "Memórias entre gerações",
    ],
    cta: "Entrar na lista de espera",
    featured: false,
  },
] as const;
