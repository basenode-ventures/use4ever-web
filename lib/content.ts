export const SITE_URL = "https://use4ever.com";
export const WORDMARK = "use4ever";
export const CONTACT_EMAIL = "contato@use4ever.com";

export const SITE_DESCRIPTION =
  "Um espaço privado para suas memórias em família. Compartilhe fotos, vídeos e histórias com as pessoas que mais importam.";

export const HERO = {
  titleLine1: "Compartilhe momentos",
  titleLine2: "com quem você ama",
  description: SITE_DESCRIPTION,
  cta: "Entrar na lista de espera",
  learnMore: "Saiba mais",
} as const;

export const FEATURES_SECTION = {
  eyebrow: "Tudo que você precisa",
  title: "Uma forma melhor de compartilhar momentos em família",
  subtitle:
    "Mantenha suas memórias preciosas seguras e facilmente acessíveis para as pessoas que mais importam.",
} as const;

export const FEATURES = [
  {
    name: "Compartilhamento Privado",
    description:
      "Compartilhe momentos apenas com as pessoas que você escolher. Seu conteúdo permanece privado e seguro.",
  },
  {
    name: "Família em Primeiro Lugar",
    description:
      "Convide familiares e amigos próximos para fazer parte do seu círculo privado.",
  },
  {
    name: "Mídia em Alta Qualidade",
    description:
      "Compartilhe fotos e vídeos em alta qualidade, preservados para sempre.",
  },
  {
    name: "Atualizações em Tempo Real",
    description:
      "Receba notificações instantâneas quando seus entes queridos compartilharem novos momentos.",
  },
] as const;

export const PRICING_SECTION = {
  eyebrow: "PREÇOS",
  title: "Escolha o plano ideal para sua família",
  subtitle: "Comece gratuitamente e atualize conforme suas necessidades crescem",
} as const;

export const PLANS = [
  {
    name: "Basic",
    price: "R$ 0",
    period: "/mês",
    description: "Perfeito para uso individual",
    features: [
      "Até 100 fotos por mês",
      "Compartilhamento com até 5 pessoas",
      "Qualidade de mídia padrão",
      "Notificações básicas",
    ],
    cta: "Começar grátis",
    featured: false,
  },
  {
    name: "Pro",
    price: "R$ 29,90",
    period: "/mês",
    description: "Ideal para famílias",
    features: [
      "Fotos e vídeos ilimitados",
      "Compartilhamento ilimitado",
      "Mídia em alta qualidade",
      "Notificações em tempo real",
      "Backup automático",
      "Álbuns colaborativos",
    ],
    cta: "Começar agora",
    featured: true,
  },
] as const;
