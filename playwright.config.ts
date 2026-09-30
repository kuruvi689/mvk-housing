import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  retries: 1,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://localhost:3100",
    trace: "retain-on-failure",
    // The sandbox's network only reaches the full Chrome-for-Testing build via
    // a direct download, not Playwright's default "headless shell" binary, so
    // this project pins launches to the manually-installed full browser.
    launchOptions: {
      executablePath:
        "C:\\Users\\sindh\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win64\\chrome.exe",
    },
  },
  webServer: {
    command: "npm run dev -- -p 3100",
    url: "http://localhost:3100",
    reuseExistingServer: true,
    timeout: 60_000,
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
});
