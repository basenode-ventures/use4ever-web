import { describe, expect, it } from "vitest";
import { SITE_URL, TAGLINE, WORDMARK } from "./content";

describe("marketing copy", () => {
  it("exposes the approved wordmark only", () => {
    expect(WORDMARK).toBe("4ever");
  });

  it("keeps a single Portuguese tagline about the memory time capsule", () => {
    expect(TAGLINE).toBe("Uma cápsula do tempo de memórias.");
    expect(TAGLINE.toLowerCase()).toContain("cápsula do tempo");
    expect(TAGLINE.toLowerCase()).toContain("memórias");
  });

  it("points canonical site URL at use4ever.com", () => {
    expect(SITE_URL).toBe("https://use4ever.com");
  });
});
