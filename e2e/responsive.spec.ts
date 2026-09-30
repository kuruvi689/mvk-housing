import { test, expect } from "@playwright/test";

const pages = ["/", "/buy", "/sell", "/about"];

test.describe("Responsive layout", () => {
  for (const path of pages) {
    test(`${path} has no horizontal overflow`, async ({ page }) => {
      await page.goto(path);
      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    });
  }

  test("WhatsApp float button is a plain wa.me link that still works if JS fails", async ({
    page,
  }) => {
    await page.goto("/");
    const float = page.getByTestId("whatsapp-float");
    await expect(float).toHaveAttribute("href", /^https:\/\/wa\.me\/919840055269\?text=/);
  });
});
