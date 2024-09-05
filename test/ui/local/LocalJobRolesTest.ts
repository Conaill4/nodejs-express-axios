import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import webdriver, { WebDriver } from 'selenium-webdriver';

describe('Job Roles Page Tests - Local', () => {
  let driver: WebDriver;
  const url: string = 'http://localhost:3000/job-roles';
  const homeUrl: string = 'http://localhost:3000/';


  before(async () => {
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
  });

  after(async () => {
    await driver.quit();
  });

  describe('Local - Page Load', () => {
    it('should load the job roles page successfully on AWS and return correct poge title', async () => {
      await driver.get(url);
      const title = await driver.getTitle();
      expect(title).to.equal('Job Roles - Kainos');
    });
  });

  describe('Local - Working available jobs button', ()=> {
    it('should navigate to the job roles endpoint when button is clicked', async () =>{
        await driver.get(homeUrl);
        await driver.manage().setTimeouts({ implicit: 2000 });
        const availJobButton = await driver.findElement(webdriver.By.linkText('Available Jobs')).click();
        await driver.manage().setTimeouts({ implicit: 2000 });
        const jobRolesUrl = await driver.getCurrentUrl();
        expect(jobRolesUrl).to.equal(url);
    })
  })

  describe('Local - Check correct headers', () => {
    it('Headers should correspond to what is required in the ACs', async () =>{
        await driver.get(url);
        const headers = await driver.findElements(webdriver.By.className('th_data'));
        const expectedHeaders = ['Role name:', 'Location:', 'Capability:', 'Band:', 'Closing Date:'];
        for (let i = 0; i < headers.length; i++) {
            const headerText = await headers[i].getText();
            expect(headerText).to.equal(expectedHeaders[i]);
          }
    })
  })

  describe('Local - Check correct role name is returned', () => {
    it('The text in the entries should should match the role names in the database', async () =>{
        await driver.get(url);
        const roleName1 = await driver.findElement(webdriver.By.id('jobName1')).getText();
        const roleName2 = await driver.findElement(webdriver.By.id('jobName2')).getText();
        expect(roleName1).to.equal('Software Engineer');
        expect(roleName2).to.equal('Tester');
    })

  })

  describe('Local - Ensure correct header is present', () =>{
    it('Header should be present and read "Jobs at Kainos"', async () =>{
        await driver.get(url);
        const header = await driver.findElement(webdriver.By.tagName('h2')).getText();
        expect(header).to.equal('Jobs at Kainos');
    })
  })

  describe('Local - Correct locations for the roles', () =>{
    it('The location for each role in the table should have the correct location', async () =>{
        await driver.get(url);

        const location1 = await driver.findElement(webdriver.By.id('jobLocation1')).getText();
        const location2 = await driver.findElement(webdriver.By.id('jobLocation2')).getText();

        expect(location1).to.equal('Derry');
        expect(location2).to.equal('Derry');
    })
  })

})