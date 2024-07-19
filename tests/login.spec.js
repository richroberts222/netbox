const {test, expect} = require('@playwright/test');

test.only("Netbox Login", async ({page}) => {

    const USERNAME = "bitshredr";
    const PASSWORD = "!T0mmygun***";

    const username = page.locator('#id_username');
    const password = page.locator('#id_password');
    const signIn = page.locator('button[type="submit"]');

    await page.goto("http://127.0.0.1:8000");
    await username.fill(USERNAME);
    await password.fill(PASSWORD);
    await signIn.click();

    await page.pause();
});