import { Page } from 'playwright';

export class HotelPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectMapView() {
    await this.page.waitForSelector('internal:role=button[name="Grid"i]');
    await this.page.click('internal:role=button[name="Grid"i]');
    await this.page.waitForSelector('div[value="map"]');
    await this.page.click('div[value="map"]');
  }

  async applySliderFilter() {
    // Locate the left handle of the price range slider
  const leftHandle = this.page.locator('div[role="slider"]').first();

  const targetX = 500;
  const targetY = 300;
 
  // Create a helper element at the target coordinates
  await this.page.evaluate(({ x, y }) => {
    const helperElement = document.createElement('div');
    helperElement.id = 'helper-element';
    helperElement.style.position = 'absolute';
    helperElement.style.left = `${x}px`;
    helperElement.style.top = `${y}px`;
    helperElement.style.width = '1px';
    helperElement.style.height = '1px';
    document.body.appendChild(helperElement);
  }, { x: targetX, y: targetY });

 
  // Locate the helper element
  const helperElement = this.page.locator('#helper-element');

  // Drag the left handle to set the minimum price
  await leftHandle.dragTo(helperElement);
//   await rightHandle.dragTo();
 // Remove the helper element after the drag action
  await this.page.evaluate(() => {
    const helperElement = document.getElementById('helper-element');
    if (helperElement) {
      helperElement.remove();
    }
  });

  }
 
  async applyGuestScoreFilter(score: string) {
    await this.page.click(`label:has-text("${score}")`);
  }

  async mapInteraction() {
    const markers = this.page.locator('gmp-advanced-marker').nth(0);
      for (let i = 0; i < 3; i++) {
        await markers.click({ delay: 1000 });
      }
  }

  async selectHotel() {
    await this.page.click('gmp-advanced-marker');
    await this.page.click('gmp-advanced-marker');
    await this.page.waitForSelector('a[aria-label="Go to hotel details"]');
  }

  async getHotelInfo() {
    const review = this.page.locator('label:has-text("Very Good")').nth(1);
    await review.isVisible();
  }

// *Desired approach not implemented* > Ensure that at least one marker is present
//  const markerCount = await markers.count();
//  expect(markerCount).toBeGreaterThan(0);

//  // Define the locator for the hotel card that appears after a marker is clicked.
//  // Replace the selector with the actual selector used on the site.


//  let hotelCardVisible = false;
 
//  // Iterate over each marker and click until the hotel card is visible
//  for (let i = 3; i < markerCount; i++) {
//    const marker = markers.nth(i);
//    await marker.click();
   
//    try {
//      // Wait for the hotel card to become visible
//      await expect(hotelCard).toBeVisible({ timeout: 3000 });
//      hotelCardVisible = true;
//      break; // Exit the loop if the hotel card is visible
//    } catch (err) {
//      // If the hotel card did not appear, continue with the next marker
//      console.log(`Marker ${i} did not display the hotel card.`);
//    }
//  }
}