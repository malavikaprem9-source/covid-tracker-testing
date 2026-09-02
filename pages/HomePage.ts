import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { waitForVisible } from '../utils/waits';

/**
 * NOTE: The locators below are best-guess placeholders based on the site's
 * likely structure (a React app with a state dropdown). Before running,
 * open the site, press F12 -> right-click the dropdown -> "Inspect", and
 * replace the selector strings with the real ones you see in the DOM.
 * That's normal — every automation project starts with this step.
 */
export class HomePage extends BasePage {
  readonly stateDropdown: Locator;
  readonly dropdownOptions: Locator;

  constructor(page: Page) {
    super(page);
    // Update this selector to match the real dropdown element/attribute.
    this.stateDropdown = page.locator('select, [role="combobox"]').first();
    this.dropdownOptions = page.locator('option, [role="option"]');
  }

  async open() {
    await this.goto();
    await waitForVisible(this.stateDropdown);
  }

  async selectState(stateName: string) {
    await this.stateDropdown.selectOption({ label: stateName });
}

  async getAllAvailableStates(): Promise<string[]> {
    await this.stateDropdown.click();
    return this.dropdownOptions.allTextContents();
  }
}
