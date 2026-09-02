import { Page } from '@playwright/test';
import { config } from '../config/env';

/**
 * BasePage holds behavior every page object shares, so individual
 * page classes (HomePage, DashboardPage, ...) only define what's
 * unique to them.
 */
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path = '') {
    await this.page.goto(`${config.baseUrl}${path}`);
  }

  async title(): Promise<string> {
    return this.page.title();
  }
}
