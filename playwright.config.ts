import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000";

/**
 * Viewport presets for responsive testing (Chromium only for CI/local without WebKit):
 * - Mobile: 390x844 (phone)
 * - Tablet: 768x1024 (tablet)
 * - Laptop: 1366x768 (common laptop)
 * - Desktop: 1920x1080 (full HD)
 * - Large: 2560x1440 (QHD)
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: "list",
  use: {
    ...devices["Desktop Chrome"],
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "mobile",
      use: {
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: "tablet",
      use: {
        viewport: { width: 768, height: 1024 },
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: "laptop",
      use: { viewport: { width: 1366, height: 768 } },
    },
    {
      name: "desktop",
      use: { viewport: { width: 1920, height: 1080 } },
    },
    {
      name: "large",
      use: { viewport: { width: 2560, height: 1440 } },
    },
  ],
  webServer: process.env.CI
    ? undefined
    : {
        command: "npm run dev",
        url: baseURL,
        reuseExistingServer: true,
        timeout: 30_000,
      },
});
