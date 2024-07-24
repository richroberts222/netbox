PreRequsite:
1. Install Netbox with it running on localhost:8000

Once this repo is cloned

Install Playwright
1. npm install playwright (if you want to save it to package.json use -D)
2. npx playwright install (this installs the browsers like chromium, etc..)
3. npx playwright test (run the tests)

Intention of Tests
1. Create a test that logs into Netbox and validates the dashboard page is loaded
2. Create a test that clicks links in the Left Sidebar
 a. Create a method that Clicks the Parent Link by the name of the Text in the Link
 b. Create a method that Clicks the Child of an Expanded Parent Link also by the name of the Text

Build out the Framework
1. Started with a Mocha Playwright Native TDD Framework
2. In the process of Building a Cucumber BDD Framework
