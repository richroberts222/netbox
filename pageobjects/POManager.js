const {LoginPage} = require('./LoginPage');

class POManager
{
    constructor(page)
    {
        this.page = page;
        this.LoginPage = new LoginPage(this.page);
    }

    getLoginPage()
    {
        return this.LoginPage;
    }
}
module.exports = {POManager}