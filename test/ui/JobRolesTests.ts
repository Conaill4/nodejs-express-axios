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

        //testing that there is a job with role id 1 that appears
        const expectedJobRoleId = await driver.findElement(webdriver.By.className('jobNameClass')).getText();
        const jobroleId = await driver.findElement(webdriver.By.className('jobNameClass')).getText();
 
        expect(expectedJobRoleId).to.equal(jobroleId);

    })
})



 