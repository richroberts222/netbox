const { test } = require('@playwright/test')
const { POManager } = require('../pageobjects/POManager');
const loginTestData = require("../testdata/loginTestData.json");
const dashboardTestData = require("../testdata/dashboardTestData.json");

test.only("Navigate Sidebar", async ({page}) => {

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();

    await page.goto("http://127.0.0.1:8000");
    await loginPage.validLogin(loginTestData.username, loginTestData.password);
    await dashboardPage.validateDashboardPageLoaded();
    await dashboardPage.clickParentSideBarButton(dashboardTestData.sideBarParentButton);
    await dashboardPage.clickChildSideBarButton(dashboardTestData.sideBarChildButton);

    await page.pause();
});