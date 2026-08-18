import { expect, test } from "@playwright/test";

test("home shows the time-capsule marketing LP with no env vars", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.ok()).toBeTruthy();

  await expect(page.getByRole("link", { name: "use4ever" }).first()).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 1, name: /Suas memórias,/ }),
  ).toBeVisible();
  await expect(page.getByText("para sempre.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Entrar na lista de espera" })).toBeVisible();
  await expect(page.getByText("A cápsula")).toBeVisible();
  await expect(page.getByText("R$ 19,90")).toBeVisible();
  await expect(page.getByText("R$ 39,90")).toBeVisible();
  await expect(page.getByText("Popular")).toBeVisible();
});

test("waitlist pages are static mailto flows without forms posting to a backend", async ({
  page,
}) => {
  await page.goto("/cadastro");
  await expect(page.getByRole("heading", { name: "Lista de espera" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Entrar na lista de espera" })).toHaveAttribute(
    "href",
    /mailto:contato@use4ever\.com/,
  );

  await page.goto("/login");
  await expect(page.getByRole("heading", { name: "Lista de espera" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Entrar na lista de espera" })).toHaveAttribute(
    "href",
    /mailto:contato@use4ever\.com/,
  );
});

test("legal and manifesto pages keep original titles", async ({ page }) => {
  await page.goto("/manifesto");
  await expect(page.getByRole("heading", { name: "Nosso Manifesto" })).toBeVisible();
  await expect(page.getByText("cápsula do tempo")).toBeVisible();

  await page.goto("/termos");
  await expect(page.getByRole("heading", { name: "Termos de Uso" })).toBeVisible();
  await expect(page.getByText("Última atualização: Agosto 2026")).toBeVisible();

  await page.goto("/privacidade");
  await expect(page.getByRole("heading", { name: "Política de Privacidade" })).toBeVisible();
});
