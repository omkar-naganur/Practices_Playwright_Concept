const { test, expect } = require("@playwright/test");

test.only("my first Test", async ({ browser }) => {
  // playwright code

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://google.com");

  console.log(await page.title());

  await expect(page).toHaveTitle("Google");
});

test("Page playwright test", async ({ page }) => {
  // playwright code
  await page.goto("http://206.189.136.118:7001/signin");
});
