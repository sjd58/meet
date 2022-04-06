Project: Meet application

Developer: Sam Dickson

Project Description:
This is an application to enable users to find meetups and receive notifications about time, date, and location.

User stories for application features:

Feature 2, show/hide an event’s details: As a user, given the application’s list of events, when I want to access more information on those events, I should then be able to click to show or hide that event’s details.
Scenario 1: An event element is collapsed by default.
Given the list of events to choose from, when I look at the list initially, events should then be collapsed by default so that the interface is clean and I can access more information when I want to do so.
Scenario 2: User can expand an event to see its details.
Given the list of events to choose from, when I see an event that I want to learn more about, I should be able to expand that event to learn more.
Scenario 3: User can collapse an event to hide its details.
Given the list of events to choose from, when I access an event to see more information but want to move on, I should then be able to collapse the expanded event to return the interface to its cleaner state so that I can see more events at one time.

Feature 3, specify number of events: As a user, given that the application will display many events, when I request the events from the application, the application should then either return a default number so that it is manageable or allow me to specify my own number.
Scenario 1: When user hasn’t specified a number, 32 is the default number.
Given the application’s feature to present events relevant to me, when I want to access the events but don’t care about the number that is returned to me, the application should then return a reasonable default number, such as 32 events.
Scenario 2: User can change the number of events they want to see.
Given the application’s feature to present events relevant to me, when I want to access the events but only want to see a certain number, the application should then allow me to specify the number of event I want returned.

Feature 4, show cached data when there’s no internet connection: As a user, given that the application will sometimes be unable to connect to the internet, when the user wants to interact with it, the application should then have some offline functionality.
Scenario 1: Show cached data when there’s no internet connection.
Given that the application will sometimes be offline, when I still want to interact with it as a user, the application should then have the functionality to allow me to see its cached data.
Scenario 2: Show error when user changes the settings (city, time, range)
Given that the application will sometimes be offline, when I interact with it as a user but try to use a function that simply won’t work offline such as the settings, the application should then send me an error message to let me know.

Feature 5, data visualization: As a user, given the information that I want to access on the Meet App, when I want to access the events, the application should then present me charts showing dates of events so that I can quickly find events in the time range that work with me.
Scenario 1: Show a cart with the number of upcoming events in each city.
Given the user accesses the main page, I they want to see the upcoming events, I will have access to a chart with all upcoming events. 

Development History:
4/6/2022: project began, repo published to github and github-pages