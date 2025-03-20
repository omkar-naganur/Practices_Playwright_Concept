import { test } from "@playwright/test";

test.only("test", async ({ page }) => {
  await page.goto("http://206.189.136.118:5187/");
  await page.getByRole("link", { name: "Login" }).click();
  await page.locator("#userName").click();
  await page.locator("#userName").fill("omkar@krishworks.com");
  await page.locator("#userName").press("Tab");
  await page.getByRole("button").filter({ hasText: /^$/ }).press("Tab");
  await page.locator('input[type="password"]').fill("Pass@2025");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("button", { name: "Create Experiment" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^263Add$/ })
    .getByRole("button")
    .click();
  await page.locator('[id="\\:r0\\:"]').click();
  await page.locator('[id="\\:r0\\:"]').fill("APPLE");
  await page.locator('[id="\\:r0\\:"]').press("Tab");
  await page.locator('[id="\\:r1\\:"]').fill("Dog");
  await page.locator('[id="\\:r1\\:"]').press("Tab");
  await page.locator('[id="\\:r2\\:"]').fill("CAT");
  await page.getByRole("button", { name: "Update" }).first().click();
  await page
    .getByRole("button", { name: "Add Instructions Add" })
    .getByRole("textbox")
    .click();
  await page
    .getByRole("button", { name: "Add Instructions Add" })
    .getByRole("textbox")
    .fill("welcom ");
  await page
    .getByRole("button", { name: "Add Instructions Add" })
    .getByRole("textbox")
    .press("Tab");
  await page.getByRole("button", { name: "Normal" }).nth(1).press("Tab");
  await page.locator(".ql-editor").first().click();
  await page.locator(".ql-editor").first().fill("hi");
  await page.getByRole("button", { name: "Add", exact: true }).nth(1).click();
  await page
    .getByRole("button", { name: "Add Survey menu menu Survey" })
    .getByRole("textbox")
    .first()
    .click();
  await page
    .getByRole("button", { name: "Add Survey menu menu Survey" })
    .getByRole("textbox")
    .first()
    .fill("hi");
  await page
    .getByRole("button", { name: "Add Survey menu menu Survey" })
    .getByRole("textbox")
    .nth(1)
    .click();
  await page
    .getByRole("button", { name: "Add Survey menu menu Survey" })
    .getByRole("textbox")
    .nth(1)
    .fill("http://206.189.136.118:5187/");
  await page
    .getByRole("button", { name: "Add Survey menu menu Survey" })
    .getByRole("textbox")
    .nth(2)
    .click();
  await page
    .getByRole("button", { name: "Add Survey menu menu Survey" })
    .getByRole("textbox")
    .nth(2)
    .fill("mds");
  await page.getByRole("button", { name: "Update", exact: true }).click();
  await page
    .getByRole("button", { name: "Demo Game Matrix add matrix" })
    .getByRole("button")
    .click();
  await page
    .getByRole("button", { name: "Demo Game Matrix add matrix" })
    .click();
  await page
    .getByRole("button", { name: "Demo Game Matrix add matrix" })
    .click();
  await page
    .getByRole("button", { name: "Demo Game Matrix add matrix" })
    .click();
  await page
    .getByRole("button", { name: "Demo Game Matrix add matrix" })
    .click();
  await page
    .getByRole("button", { name: "Demo Game Matrix add matrix" })
    .click();
  await page
    .getByRole("button", { name: "Add Matrix menu menu Set No" })
    .click();
  await page
    .getByRole("button", { name: "Add Matrix menu menu Set No" })
    .click();
  await page.getByRole("button", { name: "Enable Rearrange" }).click();
  await page
    .getByRole("button", { name: "Demo Game Matrix add matrix" })
    .click();
  await page.getByRole("button", { name: "Disable Rearrange" }).click();

  await page.pause();
});
