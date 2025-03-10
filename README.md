
# Playwright Automation Framework

This project is an automated testing framework built with [Playwright](https://playwright.dev) and TypeScript. It automates the booking process for the Simplenight website across various categories.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Additional Information](#additional-information)

## Introduction

This framework uses the [Page Object Model (POM)](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/) to separate page interactions from test scripts. It provides a clear structure to:
- Navigate the Simplenight homepage.
- Perform searches with parameters.
- Interact with map elements and filters.

## Prerequisites

Before getting started, ensure you have the following installed:
- **Node.js** (version 14 or higher) – [Download Node.js](https://nodejs.org)
- **npm** (comes with Node.js) or **Yarn**

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**

   Using npm:
   ```bash
   npm install
   ```

   Or using Yarn:
   ```bash
   yarn install
   ```

3. **Install Playwright browsers:**

   Playwright requires the browsers to be installed. Run:
   ```bash
   npx playwright install
   ```

## Configuration

- **Environment Variables:**  
  Fixed value in the config.ts, but ideally create a `.env` file in the root of the project and add environment-specific parameters. For example:
  ```env
  BASE_URL=https://app.simplenight.com
  ```

- **Playwright Configuration:**  
  The project includes a `playwright.config.ts` file where you can adjust test options, browser settings, and environment-specific parameters.

## Running Tests

You can run your tests using the following commands:

- **Run all tests:**
  ```bash
  npx playwright test
  ```

- **Run tests in headed mode (for debugging):**
  ```bash
  npx playwright test --headed
  ```

- **Run a specific test file:**
  ```bash
  npx playwright test tests/<test-file-name>.spec.ts
  ```

- **Generate and view HTML report:**
  ```bash
  npx playwright show-report
  ```

## Project Structure

```
├── pageObjects/             # Page Object Model (POM) classes
│   ├── homePage.ts          # Actions and selectors for homepage
│   └── hotelPage.ts         # Actions and selectors for hotelpage
├── test/                    # Page Object Model (POM) classes
│   └── booking.test.ts      # Test file
├── playwright.config.ts     # Playwright configuration file
├── package.json             # Project dependencies and scripts
└── README.md                # This file
```

## Additional Information

- **Updating Playwright:**  
  To update Playwright to the latest version:
  ```bash
  npm install @playwright/test@latest
  ```

- **Documentation:**  
  For more details, refer to the [Playwright Documentation](https://playwright.dev/docs/intro).