COVID Tracker – Playwright Automation Testing
About the Project

This is a beginner-level Playwright automation project created as part of my learning and practice in automation testing.

The purpose of this project is to understand how Playwright can be used with TypeScript to automate UI test cases and how a basic automation framework can be structured using Page Object Model (POM).

I have tried to implement the main Playwright concepts I have learned so far, including:

Playwright project setup
Page Object Model (POM)
Separate test, page, and utility files
Environment-based configuration
Reusable utility functions
Handling chart data using a for loop
HTML test reporting
Screenshots on failure
Video and trace collection
Basic cross-browser testing
Project Structure
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
Framework Approach

I have used a simple Page Object Model structure to keep the page-related locators and actions separate from the test cases.

The framework is intentionally kept simple because I am currently learning Playwright and automation framework development.

What I Learned

Through this project, I practiced:

Creating a Playwright project
Creating and running test cases
Using locators
Creating Page Object classes
Reusing methods between tests
Managing configuration
Using loops to process chart values
Generating HTML reports
Capturing screenshots, videos and traces
Running tests on different browsers
Current Learning Status

This project represents my current understanding of Playwright. I am still learning and improving the framework, locator strategies, synchronization, assertions, and automation best practices.

I have focused on understanding the concepts and implementing them practically rather than building a complex framework.
