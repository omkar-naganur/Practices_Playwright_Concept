const { test, expect } = require("@playwright/test");

const fakePayLoadOrders = { data: [], message: "No Orders" };

test("@Web Client App login", async ({ page }) => {
  //js file- Login js, DashboardPage
  const email = "omkarnaganur123@gmail.com";
  const productName = "ZARA COAT 3";
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").type("Pass@2025");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);

  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6344194bc4d0c51f4f3a3a65",
    async (route) => {
      const response = await page.request.fetch(route.request());
      let body = JSON.stringify(fakePayLoadOrders);
      route.fulfill({
        response,
        body,
      });
    }
  );

  await page.locator("button[routerlink*='myorders']").click();
  await page.pause();
  //intercepting response - API response-> {playwright f
});
