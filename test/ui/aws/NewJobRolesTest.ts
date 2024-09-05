import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import webdriver, { WebDriver } from 'selenium-webdriver';

describe('Job Roles Page Tests - AWS', () => {
  let driver: WebDriver;

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
      const url: string = 'https://sbpkguvypc.eu-west-1.awsapprunner.com/job-roles/';
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
        expect(jobRolesUrl).to.equal('https://sbpkguvypc.eu-west-1.awsapprunner.com/job-roles');
    })
  })

  describe('AWS - ')
})