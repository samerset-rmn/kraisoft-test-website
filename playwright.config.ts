import { defineConfig, devices } from '@playwright/test';
import path from 'path';

import { SITE_BASE_PATH } from '@/shared/constants/basePath';

const PORT = process.env.PORT || 3000;
const BASE_URL = `http://localhost:${PORT}${SITE_BASE_PATH}`;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 10000,
  testDir: path.join(__dirname, 'playwright/tests'),
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: BASE_URL,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], baseURL: BASE_URL }
    }
  ],
  webServer: {
    command: 'npm run dev',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 10000
  }
});
