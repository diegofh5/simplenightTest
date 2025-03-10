import { Page } from 'playwright';
import { expect } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async selectHotelsCategory() {
    await this.page.click('text=Hotels');
  }

  async enterDestination(destination: string, mapDestination: string) {
    // Search for hotels in location
    await this.page.click('button[aria-label="Destination"]');
    await this.page.fill('input[type="text"][placeholder="Where are you going?"]', destination);
    await this.page.waitForSelector(`text="${mapDestination}"`);
    await this.page.click(`text="${mapDestination}"`);

  }

  async selectDates(monthYear:string, startDate: string, endDate: string, dateRange: string) {
    // Set the date range to May 20-22
    await this.page.click('button[aria-label="Dates"]');
    // Navigate to May 2025 by clicking the right arrow until May is visible
    while (!(await this.page.isVisible(`text="${monthYear}"`))) {
        await this.page.click('button[data-direction="next"]');
    }
    // Select the start date
      await this.page.dblclick(`button[type="button"][aria-label="${startDate}"]`);  
    // Select the end date
      await this.page.click(`button[type="button"][aria-label="${endDate}"]`);
    // Confirm the selection by clicking the "Apply" button
    await this.page.click('button:has-text("Apply")');
    // Assertion to verify the selected date range
    const selectedDateRange = await this.page.locator('[data-testid="category\(static\:hotels\)_search-form_dates_output"]').textContent();
    expect(selectedDateRange).toContain(`${dateRange}`);
  }

  async selectGuests() {
    //Add guest 
     await this.page.click('button[aria-label="Guests"]');
     await this.page.click('button[aria-label="Add Child"]');
  }

  async search() {
    // Submit the search
    await this.page.click('[data-testid="category\(static\:hotels\)_search-form_search-button"]');
  }
}


