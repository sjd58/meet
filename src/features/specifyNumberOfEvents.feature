Feature: Specify number of events

Scenario: When user hasn't specified a number, 32 is the default number
Given the app presents evens relevant to the user
When the user does not specify the number of events to display
Then the app will display 32 events

Scenario: User can change the number of events they want to see
Given the app presents evens relevant to the user
When the user wants to only see a certain number
Then the app will display that number of events