Feature: Validate Dashboard Page Navigation

Background:
    Given user logs into netbox with "bitshredr" and "!T0mmygun***"
    Then validate the user landed on the Dashboard Page

Scenario Outline:
    Given the user clicks a parent side bar link "<parentLink>"
    When the user clicks a child side bar link "<childLink>"
    Then validate the user landed on the correct "<page>"

Examples:
| parentLink   | childLink | page                              |
| Organization | Sites     | http://127.0.0.1:8000/dcim/sites/ |
| VPN          | L2VPNs    | http://127.0.0.1:8000/vpn/l2vpns/ |

