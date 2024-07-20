const {expect} = require('@playwright/test');

class DashboardPage
{
    constructor(page)
    {
        this.page = page;
        this.searchBox = page.locator('input[name="q"]').first();
    }
    
    async validateDashboardPageLoaded()
    {
        await expect(this.searchBox).toBeEditable();
        
    }
}
module.exports = {DashboardPage}