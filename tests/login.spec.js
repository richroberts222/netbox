const {test, expect} = require('@playwright/test')
const { POManager } = require('../pageobjects/POManager');

test.only("Netbox Login", async ({page}) => {

    const USERNAME = "bitshredr";
    const PASSWORD = "!T0mmygun***";

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    await page.goto("http://127.0.0.1:8000");
    await loginPage.validLogin(USERNAME, PASSWORD);

    await page.pause();
});