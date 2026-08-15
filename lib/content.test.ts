import { describe, expect, it } from "vitest";
import {
  CONTACT_EMAIL,
  FEATURES,
  HERO,
  PLANS,
  SITE_URL,
  WORDMARK,
} from "./content";

describe("marketing copy", () => {
  it("keeps the use4ever wordmark", () => {
    expect(WORDMARK).toBe("use4ever");
  });

  it("preserves the Jan 2025 hero copy", () => {
    expect(HERO.titleLine1).toBe("Compartilhe momentos");
    expect(HERO.titleLine2).toBe("com quem você ama");
    expect(HERO.cta).toBe("Entrar na lista de espera");
    expect(HERO.description).toContain("espaço privado");
  });

  it("keeps the four original feature blurbs", () => {
    expect(FEATURES).toHaveLength(4);
    expect(FEATURES.map((f) => f.name)).toEqual([
      "Compartilhamento Privado",
      "Família em Primeiro Lugar",
      "Mídia em Alta Qualidade",
      "Atualizações em Tempo Real",
    ]);
  });

  it("keeps Basic free and Pro at R$ 29,90 without inventing plans", () => {
    expect(PLANS).toHaveLength(2);
    expect(PLANS[0]).toMatchObject({ name: "Basic", price: "R$ 0", featured: false });
    expect(PLANS[1]).toMatchObject({
      name: "Pro",
      price: "R$ 29,90",
      featured: true,
      cta: "Começar agora",
    });
    expect(PLANS[1].features).toContain("Álbuns colaborativos");
  });

  it("points contact and site URL at use4ever.com", () => {
    expect(SITE_URL).toBe("https://use4ever.com");
    expect(CONTACT_EMAIL).toBe("contato@use4ever.com");
  });
});
