const { test, expect } = require("@playwright/test");

test("Visual Testing For image compearing ", async ({ page }) => {
  await page.goto("https://google.com");
  expect(await page.screenshot()).toMatchSnapshot("landing.png");
});
