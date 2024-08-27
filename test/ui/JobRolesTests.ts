import webdriver from 'selenium-webdriver';

import { expect } from 'chai';

describe('Job Role test', async () => {
    it('Should view job-roles', async () => {
        const driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        const url: string = process.env.UI_TEST_URL || 'http://localhost:3000/jobs'
        await driver.get(url);

    })
})