import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { DashboardPage } from '../pages/DashboardPage';
import { states } from '../utils/dataHelper';

test.describe('Dashboard - Line Chart', () => {
  test('iterate through and print every line chart data point value', async ({ page }) => {
    const home = new HomePage(page);
    const dashboard = new DashboardPage(page);

    await home.open();
    await home.selectState(states.valid[0]);

    // This is the for-loop task requirement — implemented inside the page
    // object so the test itself stays short and readable.
    await dashboard.printAllChartPointValues();
  });
});
