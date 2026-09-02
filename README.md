# COVID Tracker - Playwright Automation Testing

This is a beginner-level Playwright automation project I created while learning automation testing.

The main purpose of this project is to get practical experience with Playwright and TypeScript and understand how a basic automation framework is structured using the Page Object Model (POM).

## What I Have Practiced

* Playwright project setup
* TypeScript
* Page Object Model (POM)
* Separate test, page, and utility files
* Environment-based configuration
* Reusable utility functions
* Working with chart data using a `for` loop
* HTML reporting
* Screenshots on test failure
* Video and trace recording
* Running tests on different browsers
* Additional UI test scenarios

## Project Structure

```text
covid-tracker-testing/
│
├── tests/
│   ├── homePage.spec.ts
│   └── dashboard.spec.ts
│
├── pages/
│   ├── BasePage.ts
│   ├── HomePage.ts
│   └── DashboardPage.ts
│
├── utils/
│   ├── waits.ts
│   └── dataHelper.ts
│
├── config/
│
├── playwright.config.ts
├── package.json
└── README.md
```

## Folder Purpose

### tests

Contains the test cases and test scenarios.

### pages

Contains the page classes, locators, and actions used to interact with the application.

### utils

Contains reusable helper functions used by the tests.

### config

Contains configuration and environment-related settings.

### playwright.config.ts

Contains the Playwright settings such as browsers, reporting, screenshots, videos, and traces.

## Chart Data

I have used a `for` loop to iterate through the points in the line chart and print their values as part of the automation practice.

## Reporting

The project uses the Playwright HTML reporter to view test execution results.

Screenshots are configured to be captured when a test fails, and video/trace information is also collected for debugging.

## Browsers

The tests can be configured to run on:

* Chromium
* Firefox
* WebKit

## My Learning

This project is part of my learning process with Playwright. I have focused on understanding the basic concepts and implementing them practically. I am continuing to learn and improve my automation testing skills.
