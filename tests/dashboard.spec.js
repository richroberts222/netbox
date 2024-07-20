const {test, expect} = require('@playwright/test')
const { POManager } = require('../pageobjects/POManager');

test.only("Navigate Sidebar", async ({page}) => {

    const USERNAME = "bitshredr";
    const PASSWORD = "!T0mmygun***";
    const PARENT_SIDEBAR_TEXT = "VPN";
    const CHILD_SIDEBAR_TEXT = "L2VPNs";

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();

    await page.goto("http://127.0.0.1:8000");
    await loginPage.validLogin(USERNAME, PASSWORD);
    await dashboardPage.validateDashboardPageLoaded();
    await dashboardPage.clickParentSideBarButton(PARENT_SIDEBAR_TEXT);
    await dashboardPage.clickChildSideBarButton(CHILD_SIDEBAR_TEXT);

    await page.pause();
});