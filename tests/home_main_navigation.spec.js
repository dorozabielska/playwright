const { test, expect } = require('@playwright/test');
const { baseUrl } = require('../data/config');
const HomePage = require('../pages/homePage');

test('navigate to home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await expect(page).toHaveURL(baseUrl);
});

test('click on contact us link and verify new page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    const newPage = await homePage.clickContactUs();
    await expect(newPage).toHaveURL(`${baseUrl}Contact-Us/contactus.html`);
    // Add additional assertions as needed
});
