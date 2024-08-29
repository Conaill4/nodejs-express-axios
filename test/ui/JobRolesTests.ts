import { describe, it } from 'node:test';
import webdriver from 'selenium-webdriver';

describe('Job Role test', async () => {
    it('Should view job-roles', async () => {
        const driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        const url: string = process.env.UI_TEST_URL || 'http://localhost:3000/job-roles'
        await driver.get(url);

    })
})
