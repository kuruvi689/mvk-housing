import { test, expect } from "@playwright/test";

test.describe("About page", () => {
  test("shows the real founder name and quote, not the Figma mock's fake ones", async ({
    page,
  }) => {
    await page.goto("/about");
    await expect(page.getByText("Mahendran M.A")).toBeVisible();
    await expect(page.getByText(/I don't just sell properties/)).toBeVisible();
    await expect(page.getByText("Er. M. V. Kumar")).toHaveCount(0);
  });

  test("founding year is left unconfirmed rather than guessed", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByText("Founded")).toBeVisible();
    const bodyText = await page.locator("body").innerText();
    expect(bodyText).not.toMatch(/since\s+20(10|24|25)/i);
  });

  test("shows the real focus areas from the client's own notes", async ({ page }) => {
    await page.goto("/about");
    for (const item of [
      "Plots & Properties",
      "Construction & Development",
      "Homes & Apartments",
      "Real Estate Consultancy",
    ]) {
      await expect(page.getByText(item)).toBeVisible();
    }
  });
});
