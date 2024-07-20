const { test } = require('@playwright/test')
const { POManager } = require('../pageobjects/POManager');
const dataSet = require("../testdata/loginTestData.json");

test("Netbox Login", async ({page}) => {

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();

    await page.goto("http://127.0.0.1:8000");
    await loginPage.validLogin(dataSet.username, dataSet.password);
    await dashboardPage.validateDashboardPageLoaded();

    await page.pause();
});