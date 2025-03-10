import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // Specify the directory where your tests are located
  testDir: './tests',

  // Test timeout in milliseconds
  timeout: 30000,

  // Global timeout for the entire test run
  globalTimeout: 600000,

  // Configure retries for flaky tests
  retries: 2,

  // Configure reporter
  reporter: [['list'], ['html', { outputFolder: 'test-results' }]],

  // Configure projects for different browsers
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: true,
        viewport: { width: 1920, height: 1080 },
      },
    },
    // {
    //   name: 'firefox',
    //   use: {
    //     browserName: 'firefox',
    //     headless: true,
    //     viewport: { width: 1920, height: 1080 },
    //   },
    // },
    // {
    //   name: 'webkit',
    //   use: {
    //     browserName: 'webkit',
    //     headless: true,
    //     viewport: { width: 1920, height: 1080 },
    //   },
    // },
  ],

  use: {
    // Take a screenshot on test failure
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  // Other configurations...

  // Configure test match pattern
  testMatch: ['**/*.test.ts'],

  // Configure global setup and teardown (if needed)
  // globalSetup: './global-setup.ts',
  // globalTeardown: './global-teardown.ts',
};

export default config;