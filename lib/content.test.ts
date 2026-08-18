import { describe, expect, it } from "vitest";
import {
  CONTACT_EMAIL,
  FEATURES,
  HERO,
  PLANS,
  SITE_DESCRIPTION,
  SITE_URL,
  TAGLINE,
  WORDMARK,
} from "./content";

describe("marketing copy", () => {
  it("keeps the use4ever wordmark and tagline", () => {
    expect(WORDMARK).toBe("use4ever");
    expect(TAGLINE).toBe("Suas memórias, para sempre.");
  });

  it("describes a time capsule, not a family album", () => {
    expect(HERO.titleLine1).toBe("Suas memórias,");
    expect(HERO.titleLine2).toBe("para sempre.");
    expect(HERO.cta).toBe("Entrar na lista de espera");
    expect(HERO.description).toContain("cápsula do tempo");
    expect(SITE_DESCRIPTION.toLowerCase()).not.toContain("álbum");
    expect(SITE_DESCRIPTION.toLowerCase()).not.toContain("tempo real");
  });

  it("keeps four feature blurbs about memory timing and recipients", () => {
    expect(FEATURES).toHaveLength(4);
    expect(FEATURES.map((f) => f.name)).toEqual([
      "O que você guarda",
      "Quando revelar",
      "Para quem",
      "Intenção além da vida",
    ]);
    expect(FEATURES.some((f) => /morte|póstum/i.test(f.description))).toBe(true);
  });

  it("shows Essencial, Eterno and Família as intended plans", () => {
    expect(PLANS).toHaveLength(3);
    expect(PLANS[0]).toMatchObject({
      name: "Essencial",
      price: "Grátis",
      featured: false,
    });
    expect(PLANS[1]).toMatchObject({
      name: "Eterno",
      price: "R$ 19,90",
      featured: true,
      cta: "Entrar na lista de espera",
    });
    expect(PLANS[2]).toMatchObject({
      name: "Família",
      price: "R$ 39,90",
      featured: false,
    });
    expect(PLANS.flatMap((p) => p.features).join(" ")).not.toMatch(
      /álbuns colaborativos|tempo real|100 fotos/i,
    );
  });

  it("points contact and site URL at use4ever.com", () => {
    expect(SITE_URL).toBe("https://use4ever.com");
    expect(CONTACT_EMAIL).toBe("contato@use4ever.com");
  });
});
