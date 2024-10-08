import { expect, assert } from 'chai';
import { describe, it, before, after } from 'mocha';
import webdriver, { WebDriver } from 'selenium-webdriver';

describe('Job Role Info Page Tests - Local', () => {
    let driver: WebDriver;
    const url: string = 'http://localhost:3000/loginform';

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

    describe('Returns login form - local', () => {
        it('When /loginform endpoint is accessed, the login form should appear', async () => {
            await driver.get(url);
            const loginForm = await driver.findElement(webdriver.By.className('login_form'));
            assert(await loginForm.isDisplayed(), 'Login form is not displayed');
        });
    });

    describe('email and password inputs visible - local', () => {
        it('When the login form is accessed the email input should be visible', async () => {
            await driver.get(url);
            const emailInput = await driver.findElement(webdriver.By.id('email'));
            assert(await emailInput.isDisplayed(), 'email is not displayed');        });

        it('When the login form is accessed the password input should be visible', async () => {
            await driver.get(url);
            const passwordInput = await driver.findElement(webdriver.By.id('password'));
            assert(await passwordInput.isDisplayed(), 'password is not displayed');        });
    });

    describe('Valid Admin details login - local', () => {
        beforeEach(async () => {
            await login(driver, 'admin@kainos.com', 'Adm1n$');
        });

        it('When valid admin details are entered the user should be directed to the homepage', async () => {
            const newPage = await driver.getTitle();
            expect(newPage).to.equal('Home - Kainos');
        });

        it('logout button should appear on homepage after login', async () => {
            const logoutButton = await driver.findElement(webdriver.By.css("button[type='submit']")).getText();
            expect(logoutButton).to.equal('Logout');
        });
    });

    describe('Valid Applicant User details login - local', () => {
        beforeEach(async () => {
            await login(driver, 'user@kainos.com', 'Us3r$');
        });

        it('When valid Applicant user details are entered the user should be directed to the homepage', async () => {
            const newPage = await driver.getTitle();
            expect(newPage).to.equal('Home - Kainos');
        });

        it('logout button should appear on homepage after login', async () => {
            const logoutButton = await driver.findElement(webdriver.By.css("button[type='submit']")).getText();
            await logout(driver);
            expect(logoutButton).to.equal('Logout');
        });
    });

    describe('Working logout button - local', () => {
        it('When user is logged in and presses log out they should be directed back to the login page', async () => {
            await login(driver, 'admin@kainos.com', 'Adm1n$');
            await logout(driver);
            const loginPage = await driver.getTitle();
            expect(loginPage).to.equal('Login - Kainos');
        });
    });

    describe('invalid login details - local', () => {
        it('When properly formatted but incorrect details are entered, the user should stay on login page', async () => {
            await login(driver, 'incorrectDetails@kainos.com', 'Incorr3ct$');
            const currentPage = await driver.getTitle();
            expect(currentPage).to.equal('Login - Kainos');
        });

        it('When properly formatted but incorrect details are entered, the user should see an error message', async () => {
            await login(driver, 'incorrectDetails@kainos.com', 'Incorr3ct$');
            const message = await driver.findElement(webdriver.By.css("div[class='input_box'] h3")).getText();
            expect(message).to.equal('Failed to get user.');
        });
    });
});
