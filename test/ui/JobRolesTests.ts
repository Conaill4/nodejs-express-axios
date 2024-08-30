import { expect } from 'chai';
import { describe, it } from 'node:test';
import webdriver from 'selenium-webdriver';

describe('Job Role test', async () => {
    it('Should view job-roles', async () => {
        const driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        const url: string = process.env.UI_TEST_URL || 'http://localhost:3000/job-roles'
        await driver.get(url);

        await driver.findElement(webdriver.By.id('jobRoleId')).sendKeys(1);
        await driver.findElement(webdriver.By.id('roleName')).sendKeys('Graduate Software Engineer');
        await driver.findElement(webdriver.By.id('location')).sendKeys('Derry');
        await driver.findElement(webdriver.By.id('capabilityName')).sendKeys('Intern');
        await driver.findElement(webdriver.By.id('bandName')).sendKeys('Grade 1 -£20,000 - 25,000');
        await driver.findElement(webdriver.By.id('closingDate')).sendKeys('Wed Dec 25 2024');

        const jobRoles = await driver.findElement(webdriver.By.id("'job-roles/1']")).getText();
        await driver.findElement(webdriver.By.id("//a[@href='job-roles/1']")).click();

        const jobs = await driver.findElement(webdriver.By.id('jobs')).getText();
 

        expect(jobRoles).to.equal(jobs);

    })
})



 