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
            
            const expectedJobRoleName =  await driver.findElement(webdriver.By.id('jobName1')).getText();
 
            await driver.findElement(webdriver.By.id('jobName1')).click();
        
            const jobrolename = await driver.findElement(webdriver.By.id('roleName')).getText();
    
 
            expect(expectedJobRoleName).to.equal(jobrolename);
 
    })
})
