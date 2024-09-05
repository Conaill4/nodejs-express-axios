import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import webdriver, { WebDriver } from 'selenium-webdriver';

describe('Job Roles Page Tests - AWS', () => {
  let driver: WebDriver;
  const url: string = 'https://sbpkguvypc.eu-west-1.awsapprunner.com/job-roles/'

  before(async () => {
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
  });

  after(async () => {
    await driver.quit();
  });

  describe('AWS - Page Load', () => {
    it('should load the job roles page successfully on AWS and return correct poge title', async () => {
      await driver.get(url);
      const title = await driver.getTitle();
      expect(title).to.equal('Job Roles - Kainos');
    });
  });

  describe('AWS - Working available jobs button', ()=> {
    it('should navigate to the job roles endpoint when button is clicked', async () =>{
        const url: string = 'https://sbpkguvypc.eu-west-1.awsapprunner.com/';
        await driver.get(url);
        const availJobButton = await driver.findElement(webdriver.By.linkText('Available Jobs')).click();
        const jobRolesUrl = await driver.getCurrentUrl();
        expect(jobRolesUrl).to.equal(url);
    })
  })

  describe('AWS - Check correct headers', () => {
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

  describe('AWS - Check correct role name is returned', () => {
    it('The text in the entries should should match the role names in the database', async () =>{
        await driver.get(url);
        const roleName1 = await driver.findElement(webdriver.By.id('jobName1')).getText();
        const roleName2 = await driver.findElement(webdriver.By.id('jobName2')).getText();
        expect(roleName1).to.equal('Software Engineer');
        expect(roleName2).to.equal('Tester');
    })
  })

  describe('AWS - Ensure correct header is present', () =>{
    it('Header should be present and read "Jobs at Kainos"', async () =>{
        await driver.get(url);
        const header = await driver.findElement(webdriver.By.tagName('h2')).getText();
        expect(header).to.equal('Jobs at Kainos');
    })
  })

})