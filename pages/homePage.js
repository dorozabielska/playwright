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
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.contactUsLink.click()
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }

    async clickLoginPortal() {
        await this.loginPortalLink.waitFor({ state: 'visible', timeout: 10000 });
        await this.loginPortalLink.click();
    }

    // Add other methods as needed
}

module.exports = HomePage;
