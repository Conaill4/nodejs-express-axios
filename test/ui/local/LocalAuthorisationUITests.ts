import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import webdriver, { WebDriver } from 'selenium-webdriver';

describe('Authorisation Tests - Local', () => {
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

    describe('Unauthorizes users can access homepage', ()=>{
        it('when a non logged in user accesses the homepage it should appear', async()=>{
            await driver.get(url);
            const homePage = await driver.getTitle();
            expect(homePage).to.equal('Home - Kainos');
        })
    })

    describe('Unauthorised user no access to job-roles', ()=>{
        it('When an unauthorised user (not logged in) tries to hit /job-roles they should be directed to login page', async()=>{
            await driver.get(url + '/job-roles');
            const loginPage = await driver.getTitle();
            expect(loginPage).to.equal('Login - Kainos');
        })

        it('When an unauthorised user (not logged in) tries to hit /job-roles/{id} they should be directed to login page', async()=>{
            await driver.get(url + '/job-roles/1');
            const loginPage = await driver.getTitle();
            expect(loginPage).to.equal('Login - Kainos');
        })
    })

    describe('Admin user can access appropriate endpoints via buttons and urls', ()=>{
        beforeEach(async () => {
            await login(driver, 'admin@kainos.com', 'Adm1n$');
        });

        it('Admin user can access job-roles', async()=>{
            await driver.get(url + '/job-roles');
            const jobRolePage = await driver.getTitle();
            expect(jobRolePage).to.equal('Job Roles - Kainos');
        })                          

        it('Admin user can access job-roles/{id}', async()=>{
            await driver.get(url + '/job-roles/1');
            const jobRolePage = await driver.getTitle();
            expect(jobRolePage).to.equal('Job - Kainos');
        })

    })

    describe('Applicant user can access appropriate endpoints via buttons and urls', ()=>{
        beforeEach(async () => {
            await login(driver, 'user@kainos.com', 'Us3r$$');
        });

        it('Admin user can access job-roles', async()=>{
            await driver.get(url + '/job-roles');
            const jobRolePage = await driver.getTitle();
            expect(jobRolePage).to.equal('Job Roles - Kainos');
        })                          

        it('Admin user can access job-roles/{id}', async()=>{
            await driver.get(url + '/job-roles/1');
            const jobRolePage = await driver.getTitle();
            expect(jobRolePage).to.equal('Job - Kainos');
        })

    })
})