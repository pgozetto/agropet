import { expect, test } from "@playwright/test";

test("home carrega com título, serviços e SEO", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/AgroPet Ipê/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  for (const s of ["Banho e Tosa", "Pet Shop", "Aves", "Vacinação", "Jardinagem", "Piscina", "Pesca", "Granja"]) {
    await expect(page.getByRole("heading", { name: s, exact: true })).toBeVisible();
  }
  const ld = await page.locator('script[type="application/ld+json"]').textContent();
  expect(JSON.parse(ld!)["@type"]).toBe("PetStore");
});

test("sem página com rolagem horizontal", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
});

test("formulário monta mensagem de WhatsApp", async ({ page, context }) => {
  await page.goto("/#agendar");
  await page.getByLabel("Seu nome").fill("Maria");
  await page.getByLabel("WhatsApp", { exact: true }).fill("19999990000");
  await page.getByLabel("Nome do pet").fill("Thor");
  const popup = context.waitForEvent("page");
  await page.getByRole("button", { name: "Enviar pedido" }).click();
  expect((await popup).url()).toContain("wa.me/5519996677042");
  await expect(page.getByRole("status")).toContainText("Pedido enviado");
});
