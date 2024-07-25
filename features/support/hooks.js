//const {test, expect, playwright} = require('@playwright/test');
const playwright = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');
const { Before, BeforeStep, AfterStep, After, Status } = require('@cucumber/cucumber'); 

Before(async function() {
	const browser = await playwright.chromium.launch({ headless: false });
	this.context = await browser.newContext();
    this.page = await this.context.newPage();
	this.poManager = new POManager(this.page);

});

BeforeStep(async function() {
	
});

AfterStep(async function({result}) {
	if(result.status === Status.FAILED) 
	{
		await this.page.screenshot({path: 'screenshot.png'});
	}
});

After(async function() {

});