import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { waitForAtLeastOne } from '../utils/waits';

/**
 * Again: these selectors are placeholders. The COVID dashboard's line chart
 * is very likely built with a charting library like Recharts or Chart.js.
 *  - Recharts renders SVG <circle class="recharts-dot"> elements per data point.
 *  - Chart.js renders everything on a <canvas>, which Playwright CANNOT read
 *    element-by-element — you'd need to hover pixel coordinates instead,
 *    or read the underlying data from the page's JS state.
 * Inspect the real page (F12 -> Elements tab, look inside the chart area)
 * to see which one applies, then adjust chartPoints below.
 */
export class DashboardPage extends BasePage {
  readonly dataTable: Locator;
  readonly totalCases: Locator;
  readonly chartPoints: Locator;

  constructor(page: Page) {
    super(page);
    this.dataTable = page.locator('table');
    this.totalCases = page.getByText(/total.*cases/i);
    // Placeholder for Recharts-style SVG dots — update after inspecting the DOM.
    this.chartPoints = page.locator('.recharts-dot, circle[class*="dot"]');
  }

  /**
   * Loops through every point in the line chart and prints its value.
   * Hovering each point (rather than reading it directly) works because
   * most chart libraries only expose the exact value in a tooltip that
   * appears on hover.
   */
  async printAllChartPointValues() {
    await waitForAtLeastOne(this.chartPoints);
    const count = await this.chartPoints.count();
    console.log(`Found ${count} chart data points.`);

    for (let i = 0; i < count; i++) {
      const point = this.chartPoints.nth(i);
      await point.hover();

      // Update this selector to match the real tooltip element.
      const tooltip = this.page.locator('.recharts-tooltip-wrapper, [role="tooltip"]');
      const value = await tooltip.textContent().catch(() => null);

      console.log(`Point ${i + 1}: ${value ?? '(no tooltip text found — adjust selector)'}`);
    }
  }

  async getTotalCasesText(): Promise<string | null> {
    return this.totalCases.textContent();
  }
}
