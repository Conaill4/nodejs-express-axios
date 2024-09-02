import { expect } from 'chai';
import { describe, it } from 'node:test';
import webdriver from 'selenium-webdriver';

describe('Job Role test', async () => {
    it('should not throw an exception when there are no errors', async () => {
        const driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        const url: string = process.env.UI_TEST_URL || 'http://localhost:3000/job-roles'
        await driver.get(url);

        const expectedJobRoleId = await driver.findElement(webdriver.By.id('identification')).getText();
        await driver.findElement(webdriver.By.id('name')).getText();
        await driver.findElement(webdriver.By.id('location')).getText();
        await driver.findElement(webdriver.By.id('capabilityName')).getText();
        await driver.findElement(webdriver.By.id('bandName')).getText();
        await driver.findElement(webdriver.By.id('closingDate')).getText();

        const jobroleId = await driver.findElement(webdriver.By.id('identification')).getText();
 

        expect(expectedJobRoleId).to.equal(jobroleId);

    })
})



 