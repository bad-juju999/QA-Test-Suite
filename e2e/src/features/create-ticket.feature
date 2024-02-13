Feature: As a user I expect to be able to create a ticket


Scenario: As a user I expect to be able to create a ticket
    Given I am on the "ticketing" page
    And I fill in the "employee email" input with "julian.lively@takecommandhealth.com"
    And I select the "Support" option from the "gender"
    And I select the "Take Command Employee" option from the "follow up"
    And I select the "low" option from the "priority"
    And I fill in the "customer email" input with ""
    And I select the "Compliance" option from the "request type"
    And I fill in the "employee" input with ""
    And I fill in the "employee email" input with ""
    And I select the "" option from the "HRA type"
    And I fill in the "company" input with ""


