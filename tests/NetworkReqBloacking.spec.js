const { test, expect } = require("@playwright/test");
const { request } = require("http");

let webContext;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  // Blocking the CSS req Calls
  await page.route("**/*.css", (route) => route.abort());

  // Blocking the
  //await page.route("**/*.{jpg,png,jpeg,svg}", (route) => route.abort());

  //Printing the all network Req and Status Code
  page.on("request", (request) => console.log(request.url()));
  page.on("response", (response) =>
    console.log(response.url(), response.status())
  );

  await page.goto("http://206.189.136.118:5187/login");
  await page.pause();
  await page.locator("#userName").fill("omkar@krishworks.com");
  await page.locator("[type*='password']").fill("Pass@2025");

  await page.locator("[type='button']").nth(1).click();
  //await page.pause();
  await page.waitForLoadState("networkidle");
  await context.storageState({ path: "state.json" });
  webContext = await browser.newContext({ storageState: "state.json" });
});

test("resource Test", async () => {
  const page = await webContext.newPage();
  await page.goto(
    "http://206.189.136.118:5187/experimenter/view-experiment/10"
  );
  await page.pause();
});
