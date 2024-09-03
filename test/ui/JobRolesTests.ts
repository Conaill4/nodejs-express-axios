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

        //Confirms that any record exists
        const expectedJobRole = await driver.findElement(webdriver.By.className('th_data')).getText();
        expect(expectedJobRole).to.exist;

    })
})



 