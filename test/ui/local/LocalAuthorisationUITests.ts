import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import webdriver, { WebDriver } from 'selenium-webdriver';

describe('Job Role Info Page Tests - AWS', () => {
    let driver: WebDriver;
    const url: string = 'http://localhost:3000';

    before(async () => {
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
    });

    after(async () => {
        await driver.quit();
    });

    const login = async (driver: WebDriver, email: string, password: string) => {
        // Navigate to the login page
        await driver.get(url);

        // Fill in the login form
        await driver.findElement(webdriver.By.id('email')).sendKeys(email);
        await driver.findElement(webdriver.By.id('password')).sendKeys(password);

        // Click submit
        await driver.findElement(webdriver.By.id('submit')).click();
    };

    const logout = async (driver: WebDriver) => {
        const logoutButton = await driver.findElement(webdriver.By.css("button[type='submit']"));
        await driver.wait(webdriver.until.elementIsVisible(logoutButton), 5000);
        await logoutButton.click();
    };
})