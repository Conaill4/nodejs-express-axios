import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import webdriver, { WebDriver } from 'selenium-webdriver';

describe('Job Role Info Page Tests - AWS', () => {
    let driver: WebDriver;
    const url: string = 'https://sbpkguvypc.eu-west-1.awsapprunner.com/loginform';

    before(async () => {
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
    });

    after(async () => {
        await driver.quit();
    });

    const getLoginForm = async(driver) =>{
        return await driver.findElement()
    }

    describe('Returns login form', ()=>{
        it('When /loginform endpoint is accessed, the login form should appear', async ()=>{
            await driver.get(url);
            const loginForm = await driver.findElement(webdriver.By.className('login_form'));
            const isFormDisplayed = await loginForm.isDisplayed();
            expect(isFormDisplayed).to.be.true;
        })
    })

    describe('email and password inputs empty', ()=>{
        it('When the login form is accessed the email input should be visible', async ()=>{
            await driver.get(url);
            const emailInput = await driver.findElement(webdriver.By.id('email')).isDisplayed();
            expect(emailInput).to.be.true;
        })

        it('When the login form is accessed the password input should be visible', async ()=>{
            await driver.get(url);
            const passwordInput = await driver.findElement(webdriver.By.id('password')).isDisplayed();
            expect(passwordInput).to.be.true;
        })
    })

    describe('Valid Admin details login', ()=>{
        it('When valid admin details are entered the user should be directed to the homepage', async()=>{
            await driver.get(url);
            const emailInput = await driver.findElement(webdriver.By.id('email')).isDisplayed();
            const passwordInput = await driver.findElement(webdriver.By.id('password')).isDisplayed();

        })
    })


})