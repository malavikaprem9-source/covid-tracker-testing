import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { states } from '../utils/dataHelper';

test.describe('Home Page - State Selection', () => {
  test('page loads successfully', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await expect(page).toHaveTitle(/.+/); // page has a non-empty title
  });

  test('user can select a valid state', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.selectState(states.valid[0]);
    // Add an assertion here once you know what the UI shows after selection,
    // e.g. expect(page.getByText(states.valid[0])).toBeVisible();
  });

  test.skip('dropdown does not allow invalid state text', async ({ page }) => {
    // Skipped until real dropdown behavior (typeable vs select-only) is confirmed.
  });
});
