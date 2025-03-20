// @ts-check

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: "./tests",
  timeout: 40 * 1000,
  expect: {
    // this time out for assertations
    timeout: 40 * 1000,
  },

  reporter: "html",
  use: {
    browserName: "chromium",
    headless: false,
  },
};

module.exports = config;
