PreRequsite:
1. Install Netbox with it running on localhost:8000
Install Instructions here: https://netboxlabs.com/docs/netbox/en/stable/installation/

Once this repo is cloned

Install Playwright
1. npm install playwright (if you want to save it to package.json use -D)
2. npx playwright install (this installs the browsers like chromium, etc..)

Running the Various Mocha Tests
1. Run All Tests: 
    npx playwright test
2. Run Headed Mode: 
    npx playwright test --headed
3. Run Interactive UI: 
    npx playwright test --ui
4. Run Specific Browser: 
    npx playwright test --project=chromium
    npx playwright test --project=firefox
5. Run Debug Mode: 
    npx playwright test --debug 
6. Run Specific Test: 
    npx playwright test tests/testExample.spec.js
7. Set test() method to test.only() to force only that one test to run, then: 
    npx playwright test
8. Run an Entire Playwright Config File
    npx playwright test --config=playwright.config.js
    Could create and name as many config files as you want for controlled, environments, browsers, and much more.

Intention of Tests
1. Create a test that logs into Netbox and validates the dashboard page is loaded
2. Create a test that clicks links in the Left Sidebar
    a. Create a method that Clicks the Parent Link by the name of the Text in the Link
    b. Create a method that Clicks the Child of an Expanded Parent Link also by the name of the Text

Build out the Framework
1. Started with a Mocha Playwright Native TDD Framework
2. In the process of Building a Cucumber BDD Framework

Install Cucumber
1. npm install @cucumber/cucumber
2. Install the VS Code Cucumber (Gherkin) Full Support Plugin - For Feature File

Create Project Structure
1. Create "features" folder in project root to hold *.feature file Test Suites
    a. Each Feature file will contain Scenarios and Parameterized Scenario Outlines
    b. Scenario and Scenario Outlines will be appropriately Tagged to control test execution 
2. Create "features/stepdefs" folder to hold step definition javascript code
3. Create "features/hooks.js" file to store all hook annotations

Running the Various Cucumber Tests
NOTE: cucumber-js lives inside of node_modules/.bin/cucumber-js. This file will blindly search the entire project for any files with a *.feature extension and execute it respectively
1. Run all Feature Files + Scenarios + Scenario Outlines: 
    npx cucumber-js
2. Return Control to the Terminal after Execution: 
    npx cucumber-js --exit
3. Run an Individual Feature File
    npx cucumber-js features/myFeature.feature --exit
4. Control Test Execution for example Smoke and Regression
NOTE: Set annotations on top of any Scenario of Scenario Outline within Feature Files
    npx cucumber-js --tags "@Regression" --exit
    npx cucumber-js --tags "@Regression or @Smoke" --exit
    npx cucumber-js --tags "@Regression and @Smoke" --exit
5. Execute Tests in Parallel
NOTE: The parameter after --parallel 2 is how many threads to execute. 2 in this case. 
NOTE: Cucumber only supports for Scenarios and Scenario Outlines within Feature Files to run in Parallel. It does not support running Feature Files in Parallel.
    npx cucumber-js --parallel 2 // This would execute 2 scenarios in parallel.
    npx cucumber-js --parallel 5 // This would execute 5 scenarios in parallel.
6. Write a Test Result Report
    npx cucumber-js --format html:cucumber-report.html
    npx cucumber-js --format xml:cucumber-report.xml
    npx cucumber-js --format json:cucumber-report.json