import { expect, test } from "@playwright/test";

test("landing shows wordmark and tagline with no env vars", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.ok()).toBeTruthy();

  await expect(page).toHaveTitle(/4ever/);
  await expect(page.getByRole("heading", { level: 1, name: "4ever" })).toBeVisible();
  await expect(page.getByText("Uma cápsula do tempo de memórias.")).toBeVisible();

  await expect(page.getByRole("textbox")).toHaveCount(0);
  await expect(page.getByRole("button")).toHaveCount(0);
});
