import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import webdriver, { WebDriver } from 'selenium-webdriver';

describe('Job Roles Page Tests - Local', () => {
  let driver: WebDriver;
  const url: string = 'https://sbpkguvypc.eu-west-1.awsapprunner.com/job-roles';
  const homeUrl: string = 'https://sbpkguvypc.eu-west-1.awsapprunner.com/';

  before(async () => {
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
  });

  after(async () => {
    await driver.quit();
  });

  describe('', ()=>{
    it('', async ()=>{
        
    })
  })

})