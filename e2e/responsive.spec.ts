import { test, expect } from "@playwright/test";

const keyPages = [
  { path: "/", name: "Home" },
  { path: "/book", name: "Book" },
  { path: "/contact", name: "Contact" },
  { path: "/projects", name: "Projects" },
  { path: "/services", name: "Services" },
  { path: "/privacy", name: "Privacy" },
  { path: "/terms", name: "Terms" },
];

test.describe("Responsive layout", () => {
  for (const { path, name } of keyPages) {
    test(`${name} (${path}) loads and has visible nav + main content`, async ({
      page,
    }) => {
      await page.goto(path);
      await expect(page).toHaveTitle(/.+/);

      // Nav should be visible (header/navbar)
      const nav = page.getByRole("navigation").first();
      await expect(nav).toBeVisible();

      // Main content area should be present
      const main = page.getByRole("main");
      await expect(main).toBeVisible();

      // Sanity: main content has reasonable width (no catastrophic overflow)
      const mainBox = await main.boundingBox();
      const viewport = page.viewportSize();
      if (mainBox && viewport && viewport.width > 0) {
        expect(mainBox.width).toBeLessThanOrEqual(viewport.width + 50);
      }
    });
  }
});

test.describe("Home page sections at different viewports", () => {
  test("Hero and key sections are visible on home", async ({ page }) => {
    await page.goto("/");

    // Hero / about section
    await expect(
      page.getByRole("heading", { level: 1 }).first()
    ).toBeVisible();

    // Skills or projects section present
    const section = page.locator("section").first();
    await expect(section).toBeVisible();
  });

  test("Navigation links are clickable", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation").first();
    await expect(nav).toBeVisible();

    // At least one link in nav
    const link = nav.getByRole("link").first();
    await expect(link).toBeVisible();
  });
});

test.describe("Forms render correctly", () => {
  test("Contact form has required fields", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByLabel(/name/i).first()).toBeVisible();
    await expect(page.getByLabel(/email/i).first()).toBeVisible();
  });

  test("Book form has required fields", async ({ page }) => {
    await page.goto("/book");
    await expect(page.getByLabel(/name/i).first()).toBeVisible();
    await expect(page.getByLabel(/email/i).first()).toBeVisible();
  });
});
