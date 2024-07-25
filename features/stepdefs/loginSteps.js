const { When, Then, Given } = require('@cucumber/cucumber');


Given('user logs into netbox with {string} and {string}', {timeout:100*1000}, async function (username, password) {
    const loginPage = this.poManager.getLoginPage();
    await this.page.goto("http://127.0.0.1:8000");
    await loginPage.validLogin(username, password);   
});

Then('validate the user landed on the Dashboard Page', async function () {
    const dashboardPage = this.poManager.getDashboardPage();
    await dashboardPage.validateDashboardPageLoaded();
});