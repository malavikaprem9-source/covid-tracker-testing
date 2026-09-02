import { defineConfig, devices } from '@playwright/test';
import { config } from './config/env';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  fullyParallel: true,

  // HTML report — auto-opens after a run unless CI=true
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],

  use: {
    baseURL: config.baseUrl,
    headless: true,

    // Screenshot only when a test fails
    screenshot: 'only-on-failure',

    // Video kept only for failing tests (saves disk space)
    video: 'retain-on-failure',

    // Trace recorded on first retry — lets you replay the failed run step by step
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
