import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("header links go to the right pages", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop nav only — mobile nav covered separately");
    await page.goto("/");
    const header = page.locator("header");
    await header.getByRole("link", { name: "Buyer" }).click();
    await expect(page).toHaveURL(/\/buy$/);

    await page.locator("header").getByRole("link", { name: "Seller" }).click();
    await expect(page).toHaveURL(/\/sell$/);

    await page.locator("header").getByRole("link", { name: "About", exact: true }).click();
    await expect(page).toHaveURL(/\/about$/);
  });

  test("language toggle switches nav text and persists across reload", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "desktop nav only — mobile nav covered separately");
    await page.goto("/");
    const header = page.locator("header");
    await expect(header.getByRole("link", { name: "Buyer" })).toBeVisible();

    await header.getByRole("button", { name: "தமிழ்" }).click();
    await expect(
      header.getByRole("link", { name: "வாங்குபவர்" })
    ).toBeVisible();

    await page.reload();
    await expect(
      page.locator("header").getByRole("link", { name: "வாங்குபவர்" })
    ).toBeVisible();
  });

  test("mobile menu opens and links work", async ({ page, isMobile }) => {
    test.skip(!isMobile, "desktop nav already covered above");
    await page.goto("/");
    await page.getByRole("button", { name: "Toggle menu" }).click();
    await page.locator("header").getByRole("link", { name: "Seller" }).click();
    await expect(page).toHaveURL(/\/sell$/);
  });

  test("footer social and contact links point to real destinations", async ({ page }) => {
    await page.goto("/");
    await page.locator("footer").scrollIntoViewIfNeeded();
    await expect(page.locator('footer a[href*="instagram.com/vmk_housing"]')).toBeVisible();
    await expect(page.locator('footer a[href*="facebook.com"]')).toBeVisible();
    await expect(page.locator('footer a[href="tel:+919840055269"]')).toBeVisible();
    await expect(page.locator('footer a[href="mailto:jawmahaae@gmail.com"]')).toBeVisible();
  });
});
