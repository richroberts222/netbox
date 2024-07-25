const { When, Then, Given } = require('@cucumber/cucumber');

Given('the user clicks a parent side bar link {string}', async function (parentLink) {
    const dashboardPage = this.poManager.getDashboardPage();
    await dashboardPage.clickParentSideBarButton(parentLink);
});

When('the user clicks a child side bar link {string}', async function (childLink) {
    const dashboardPage = this.poManager.getDashboardPage();
    await dashboardPage.clickChildSideBarButton(childLink);
});

Then('validate the user landed on the correct {string}', async function (pageUrl) {
    const dashboardPage = this.poManager.getDashboardPage();
    await dashboardPage.validateDashboardPageUrl(pageUrl);
});