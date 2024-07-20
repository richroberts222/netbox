const {expect} = require('@playwright/test');


class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.username = page.locator('#id_username');
        this.password = page.locator('#id_password');
        this.signIn = page.locator('button[type="submit"]');
    }
    
    async validLogin(username, password)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signIn.click();
    }

}
module.exports = {LoginPage}