import { test, expect } from "@playwright/test";

test.describe("Sell page", () => {
  test("lists the real seller form fields, not the buyer ones", async ({ page }) => {
    await page.goto("/sell");
    await expect(page.getByText("Exact address of the property")).toBeVisible();
    await expect(page.getByText(/Furnishing/)).toBeVisible();
    await expect(page.getByText("Your budget")).toHaveCount(0);
  });

  test("has no browsing content — no project cards on this page", async ({ page }) => {
    await page.goto("/sell");
    await expect(page.getByTestId(/project-card-/)).toHaveCount(0);
  });

  test("seller intake flow opens the form then reveals the WhatsApp confirm button", async ({
    page,
    context,
  }) => {
    await page.goto("/sell");
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      page.getByTestId("intake-open-form").click(),
    ]);
    await newPage.close();

    const confirm = page.getByRole("link", { name: /I've submitted/ });
    await expect(confirm).toBeVisible();
    await expect(confirm).toHaveAttribute(
      "href",
      /wa\.me\/919840055269\?text=.*submitted%20my%20property%20details/
    );
  });
});
