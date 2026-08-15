import { expect, test } from "@playwright/test";

test("home shows the Jan 2025 marketing LP with no env vars", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.ok()).toBeTruthy();

  await expect(page.getByRole("link", { name: "use4ever" }).first()).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 1, name: /Compartilhe momentos/ }),
  ).toBeVisible();
  await expect(page.getByText("com quem você ama")).toBeVisible();
  await expect(page.getByRole("link", { name: "Entrar na lista de espera" })).toBeVisible();
  await expect(page.getByText("Tudo que você precisa")).toBeVisible();
  await expect(page.getByText("R$ 29,90")).toBeVisible();
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
  await expect(page.getByRole("heading", { name: "Bem-vindo(a) de volta" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Entrar na lista de espera" })).toHaveAttribute(
    "href",
    /mailto:contato@use4ever\.com/,
  );
});

test("legal and manifesto pages keep original titles", async ({ page }) => {
  await page.goto("/manifesto");
  await expect(page.getByRole("heading", { name: "Nosso Manifesto" })).toBeVisible();
  await expect(page.getByText("legado digital")).toBeVisible();

  await page.goto("/termos");
  await expect(page.getByRole("heading", { name: "Termos de Uso" })).toBeVisible();
  await expect(page.getByText("Última atualização: Março 2024")).toBeVisible();

  await page.goto("/privacidade");
  await expect(page.getByRole("heading", { name: "Política de Privacidade" })).toBeVisible();
});
