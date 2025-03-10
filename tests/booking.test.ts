import { test, expect } from '@playwright/test';
import { HomePage } from '../pageObjects/homePage';
import { HotelPage } from '../pageObjects/hotelPage';
import { testData } from '../config/testData';
import { config } from '../config/config';

test('Automate Simplenight booking process', async ({ page }) => {
  const homePage = new HomePage(page);
  const hotelPage = new HotelPage(page);

  // Navigate to the Simplenight homepage
  await homePage.navigateTo(config.baseUrl);

  // Select the Hotels category
  await homePage.selectHotelsCategory();

  // Perform a search with specified parameters
  await homePage.enterDestination(testData.destination, testData.mapDestination);
  await homePage.selectDates(testData.monthYear, testData.startDate, testData.endDate, testData.dateRange);
  await homePage.selectGuests();
  await homePage.search();

 // Select Map view for the search results
    await hotelPage.selectMapView();

// Apply slider filters
    await hotelPage.applySliderFilter();

// Apply review filters
    await hotelPage.applyGuestScoreFilter(testData.guestScore);

// Map interaction
    await hotelPage.mapInteraction();

// Select hotel card
    await hotelPage.selectHotel();    

// Validate hotel card
    await hotelPage.getHotelInfo(); 
 
});