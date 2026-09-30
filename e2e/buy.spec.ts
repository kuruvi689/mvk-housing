import { test, expect } from "@playwright/test";

test.describe("Buy page — project browsing", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/buy");
  });

  test("shows all 3 real projects by default", async ({ page }) => {
    await expect(page.getByTestId("project-card-subam-house")).toBeVisible();
    await expect(page.getByTestId("project-card-vk-maruthi")).toBeVisible();
    await expect(page.getByTestId("project-card-kundrathur-villa")).toBeVisible();
  });

  test("BHK filter narrows results correctly", async ({ page }) => {
    await page.getByRole("button", { name: "3BHK", exact: true }).click();
    await expect(page.getByTestId("project-card-subam-house")).toBeVisible();
    await expect(page.getByTestId("project-card-vk-maruthi")).toHaveCount(0);
    await expect(page.getByTestId("project-card-kundrathur-villa")).toHaveCount(0);
  });

  test("budget filter combined with BHK filter produces the documented empty state", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "3BHK", exact: true }).click();
    await page.getByRole("button", { name: "₹1 Cr & above" }).click();
    await expect(page.getByText(/ask us on WhatsApp/i)).toBeVisible();
    const waLink = page.getByRole("link", { name: "Ask on WhatsApp" });
    await expect(waLink).toHaveAttribute("href", /^https:\/\/wa\.me\/919840055269\?text=/);
  });

  test("resetting filters brings all projects back", async ({ page }) => {
    await page.getByRole("button", { name: "3BHK", exact: true }).click();
    await page.getByRole("button", { name: "All", exact: true }).click();
    await expect(page.getByTestId("project-card-subam-house")).toBeVisible();
    await expect(page.getByTestId("project-card-vk-maruthi")).toBeVisible();
    await expect(page.getByTestId("project-card-kundrathur-villa")).toBeVisible();
  });

  test("sold-out project opens modal with past-work framing and correct WhatsApp CTA", async ({
    page,
  }) => {
    await page.getByTestId("project-card-subam-house").click();
    await expect(page.getByText("Past Work")).toBeVisible();
    const cta = page.getByTestId("project-modal-whatsapp-cta");
    await expect(cta).toHaveText("Ask about similar completed projects");
    await expect(cta).toHaveAttribute(
      "href",
      /wa\.me\/919840055269\?text=.*similar%20completed%20projects/
    );
  });

  test("enquire-status project opens modal with a project-specific WhatsApp CTA", async ({
    page,
  }) => {
    await page.getByTestId("project-card-kundrathur-villa").click();
    const cta = page.getByTestId("project-modal-whatsapp-cta");
    await expect(cta).toHaveText("I'm interested in Kundrathur Villa");
    await expect(cta).toHaveAttribute(
      "href",
      /wa\.me\/919840055269\?text=.*Kundrathur%20Villa/
    );
  });

  test("modal never shows an approval/compliance badge", async ({ page }) => {
    await page.getByTestId("project-card-subam-house").click();
    await expect(page.getByText("Approvals & documents pending confirmation")).toBeVisible();
    const modalText = await page.getByTestId("project-modal-backdrop").innerText();
    for (const claim of ["RERA Approved", "CMDA Approved", "TNRERA"]) {
      expect(modalText).not.toContain(claim);
    }
  });

  test("modal closes via the X button, Escape key, and backdrop click", async ({ page }) => {
    await page.getByTestId("project-card-subam-house").click();
    await page.getByTestId("project-modal-close").click();
    await expect(page.getByTestId("project-modal-backdrop")).toHaveCount(0);

    await page.getByTestId("project-card-subam-house").click();
    await page.keyboard.press("Escape");
    await expect(page.getByTestId("project-modal-backdrop")).toHaveCount(0);

    await page.getByTestId("project-card-subam-house").click();
    await page.getByTestId("project-modal-backdrop").click({ position: { x: 5, y: 5 } });
    await expect(page.getByTestId("project-modal-backdrop")).toHaveCount(0);
  });

  test("general buyer enquiry flow opens the form then reveals the WhatsApp confirm button", async ({
    page,
    context,
  }) => {
    await page.getByText("Not sure which project yet?").scrollIntoViewIfNeeded();
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      page.getByTestId("intake-open-form").click(),
    ]);
    await newPage.close();

    const confirm = page.getByRole("link", { name: /I've submitted/ });
    await expect(confirm).toBeVisible();
    await expect(confirm).toHaveAttribute(
      "href",
      /wa\.me\/919840055269\?text=.*requirements%20as%20a%20buyer/
    );
  });
});
