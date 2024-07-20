const {expect} = require('@playwright/test');

class DashboardPage
{
    constructor(page)
    {
        this.page = page;
        this.searchBox = page.locator('input[name="q"]');
    }
    
    async validateDashboardPageLoaded()
    {
        await expect(this.searchBox).
        
    }
}
module.exports = {DashboardPage}