import { Locator, Page, expect } from '@playwright/test';

/**
 * Reusable wait helpers so tests don't repeat raw Playwright wait calls
 * and so timeouts are controlled from one place.
 */

/** Wait until a locator is visible on the page. */
export async function waitForVisible(locator: Locator, timeout = 15000) {
  await locator.waitFor({ state: 'visible', timeout });
}

/** Wait until a locator is attached AND has at least one match (useful for charts/tables that render async). */
export async function waitForAtLeastOne(locator: Locator, timeout = 15000) {
  await expect(async () => {
    const count = await locator.count();
    expect(count).toBeGreaterThan(0);
  }).toPass({ timeout });
}

/** Wait for network to go idle after an action like clicking a dropdown option. */
export async function waitForNetworkIdle(page: Page, timeout = 15000) {
  await page.waitForLoadState('networkidle', { timeout });
}

/** Simple sleep — use sparingly, prefer the waits above. */
export async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
