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
    }

    async clickLoginPortal() {
        await this.loginPortalLink.click();
    }

    // Add other methods as needed
}

module.exports = HomePage;
