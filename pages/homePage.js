const { baseUrl } = require('../data/config');
class HomePage {
    constructor(page) {
        this.page = page;
        this.contactUsLink = page.locator('#contact-us');
        this.loginPortalLink = page.locator('#login-portal');
        // Add other locators as needed
    }

    async navigate() {
        await this.page.goto(baseUrl);
    }

    async clickContactUs() {
        await this.contactUsLink.click();
        // Wait for the new page to load
        await this.page.waitForURL(`${baseUrl}Contact-Us/contactus.html`);
    }

    async clickLoginPortal() {
        await this.loginPortalLink.click();
    }

    // Add other methods as needed
}

module.exports = HomePage;
