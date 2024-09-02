import { expect } from 'chai';
import { describe, it } from 'node:test';
import webdriver from 'selenium-webdriver';

describe('Job Role Detailed Response Test', async () => {
    it('should not throw an exception when there are no errors', async () => {
        const driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

            const url: string = process.env.UI_TEST_URL || 'http://localhost:3000/job-roles'
            await driver.get(url);

            await driver.findElement(webdriver.By.id('identification')).click();

            const expectedJobRoleName =  await driver.findElement(webdriver.By.id('roleName')).getText();
            await driver.findElement(webdriver.By.id('description')).getText();
            await driver.findElement(webdriver.By.id('responsibilities')).getText();
            await driver.findElement(webdriver.By.id('sharepointUrl')).getText();
            await driver.findElement(webdriver.By.id('location')).getText();
            await driver.findElement(webdriver.By.id('capabilityName')).getText();
            await driver.findElement(webdriver.By.id('bandName')).getText();
            await driver.findElement(webdriver.By.id('closingDate')).getText();
            await driver.findElement(webdriver.By.id('status')).getText();
            await driver.findElement(webdriver.By.id('numberOfOpenPositions')).getText();

            const jobrolename = await driver.findElement(webdriver.By.id('roleName')).getText();
    

            expect(expectedJobRoleName).to.equal(jobrolename);

    })
})

