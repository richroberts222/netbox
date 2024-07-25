Feature: Validate Login Functionality

Scenario: Successfull Login
    Given user logs into netbox with "bitshredr" and "!T0mmygun***"
    Then validate the user landed on the Dashboard Page
