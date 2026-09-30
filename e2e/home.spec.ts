import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("hero renders without a background video and links to /buy", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("video")).toHaveCount(0);
    await expect(page.getByRole("heading", { name: /Building Spaces/i })).toBeVisible();
    await page.getByRole("link", { name: "Explore Projects" }).click();
    await expect(page).toHaveURL(/\/buy$/);
  });

  test("dual portals cards link to buy and sell", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Browse Projects" }).click();
    await expect(page).toHaveURL(/\/buy$/);

    await page.goBack();
    await page.getByRole("link", { name: "List Your Property" }).click();
    await expect(page).toHaveURL(/\/sell$/);
  });

  test("shows only the 3 real projects, no invented listings", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#projects");
    await section.scrollIntoViewIfNeeded();
    await expect(section.getByText("Subam House")).toBeVisible();
    await expect(section.getByText("VK Maruthi")).toBeVisible();
    await expect(section.getByText("Kundrathur Villa")).toBeVisible();

    // Fabricated project names from the Figma mock must never appear.
    await expect(page.getByText("The Royal Pavilion")).toHaveCount(0);
    await expect(page.getByText("Arumugam Enclave")).toHaveCount(0);
    await expect(page.getByText("Sri Balaji Gardens")).toHaveCount(0);
  });

  test("does not show fabricated compliance or trust claims", async ({ page }) => {
    await page.goto("/");
    const bodyText = await page.locator("body").innerText();
    for (const claim of [
      "TNRERA",
      "RERA Approved",
      "CMDA Approved",
      "CMDA Compliant",
      "Fe550D",
      "Er. M. V. Kumar",
      "50+",
      "15+ Years",
    ]) {
      expect(bodyText).not.toContain(claim);
    }
  });

  test("focus areas show the real four services", async ({ page }) => {
    await page.goto("/");
    for (const service of [
      "Plots & Properties",
      "Construction & Development",
      "Homes & Apartments",
      "Real Estate Consultancy",
    ]) {
      await expect(page.getByText(service)).toBeVisible();
    }
  });

  test("trust section shows only real, derivable stats", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByTestId("stat-projects")).toContainText("3");
    await expect(page.getByTestId("stat-units-built")).toContainText("11");
    await expect(page.getByTestId("stat-districts-served")).toContainText("4");
  });

  test("CTA banner WhatsApp button has a valid wa.me link", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByRole("link", { name: "Enquire on WhatsApp" });
    await cta.scrollIntoViewIfNeeded();
    await expect(cta).toHaveAttribute("href", /^https:\/\/wa\.me\/919840055269\?text=/);
    await expect(cta).toHaveAttribute("target", "_blank");
  });
});
