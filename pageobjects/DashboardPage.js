const {expect} = require('@playwright/test');

class DashboardPage
{
    constructor(page)
    {
        this.page = page;
        this.searchBox = page.locator('input[name="q"]').first();
        this.sidebarList = page.locator('li');
    }
    
    async clickParentSideBarButton(parentButtonName)
    {
        const button = this.sidebarList.locator('.nav-link-title', { hasText: parentButtonName }).first();
        await button.click();
    }

    async clickChildSideBarButton(childButtonName)
    {
        const button = this.sidebarList.locator('.dropdown-menu.show .dropdown-item', { hasText: childButtonName}).first();
        await button.click();
    }

    async validateDashboardPageLoaded()
    {
        await expect(this.searchBox).toBeEditable();
    }

    async validateDashboardPageUrl(pageUrl)
    {
        await expect(this.page).toHaveURL(pageUrl);
    }
}
module.exports = {DashboardPage}