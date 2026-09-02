# covid-tracker-automation

Playwright automation framework for the COVID Tracker test app, using the
Page Object Model (POM). Written so a complete beginner can follow it step
by step on their own laptop.

## Folder structure

```
covid-tracker-automation/
├── config/          # env-based URL & settings
│   ├── dev.env
│   └── env.ts
├── pages/           # Page Object Model classes (one per screen)
│   ├── BasePage.ts
│   ├── HomePage.ts
│   └── DashboardPage.ts
├── utils/           # reusable helpers (waits, data handling)
│   ├── waits.ts
│   └── dataHelper.ts
├── tests/           # the actual test specs
│   ├── homePage.spec.ts
│   └── dashboard.spec.ts
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

## One-time setup on your laptop

1. **Install Node.js** (if you don't have it): download the LTS version from
   https://nodejs.org and install it. Confirm it worked by opening a
   terminal and running `node -v`.

2. **Download/unzip this project**, then open a terminal *inside the
   `covid-tracker-automation` folder* (`cd path/to/covid-tracker-automation`).

3. **Install dependencies:**
   ```
   npm install
   ```

4. **Install Playwright's browsers** (Chromium, Firefox, WebKit):
   ```
   npx playwright install
   ```

## Before your first run — update the selectors

The locators in `pages/HomePage.ts` and `pages/DashboardPage.ts` are
best-guess placeholders. Every automation project starts this way — you
need to look at the real page and match the code to it:

1. Open https://inerg-test.web.app/ in Chrome.
2. Press `F12` to open DevTools, click the arrow/inspect icon (top-left of
   DevTools), then click the state dropdown on the page.
3. See what element it actually is (`<select>`, `<div>`, etc.) and copy a
   good selector (an `id`, `data-testid`, or class name).
4. Paste that into `stateDropdown` in `HomePage.ts`. Do the same for the
   chart points and tooltip in `DashboardPage.ts`.

This is the normal first step of any automation task — you're not missing
something, the page's real structure just isn't knowable until you look.

## Running the tests

```
npm test              # runs all tests, headless
npm run test:headed   # same, but shows the browser window
npm run test:debug    # step through a test interactively
npm run report        # opens the HTML report from the last run
```

After a run, check:
- `playwright-report/` — the HTML report (open with `npm run report`)
- `test-results/` — screenshots and videos for any failed test

## Running against a different environment

Add another file like `config/staging.env`, then run:
```
ENV=staging npx playwright test
```

## Notes

- `dashboard.spec.ts` contains the required for-loop that iterates through
  every point in the line chart and prints its value (see
  `DashboardPage.printAllChartPointValues()`).
- Feel free to add more spec files in `tests/` for your own scenarios —
  that's an explicit part of the task.
