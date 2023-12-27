Feature: As a User I expect to be able to navigate to home page

@dev
@smoke
@regression
    Scenario: I expect to see contacts
        Given I am on the "home" page
        And the "header logo" should be displayed
        Then the "contacts header" should contain the text "Contacts"
        
