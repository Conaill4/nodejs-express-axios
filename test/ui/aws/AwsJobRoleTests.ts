import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import webdriver, { WebDriver } from 'selenium-webdriver';

describe('Job Roles Page Tests - AWS', () => {
  let driver: WebDriver;
  const url: string = 'https://sbpkguvypc.eu-west-1.awsapprunner.com/job-roles';
  const homeUrl: string = 'https://sbpkguvypc.eu-west-1.awsapprunner.com/';

  before(async () => {
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

      //login to admin so job roles can be accessed
      await driver.get('https://sbpkguvypc.eu-west-1.awsapprunner.com/loginform');
      await driver.findElement(webdriver.By.id('email')).sendKeys('admin@kainos.com');
      await driver.findElement(webdriver.By.id('password')).sendKeys('Adm1n$');
      await driver.findElement(webdriver.By.id('submit')).click();

  });

  after(async () => {
    await driver.quit();
  });

  describe('AWS - Page Load', () => {
    it('should load the job roles pae successfully on AWS and return correct poge title', async () => {
      await driver.get(url);
      const title = await driver.getTitle();
      expect(title).to.equal('Job Roles - Kainos');
    });
  });

  describe('AWS - Working available jobs button', ()=> {
    it('should navigate to the job roles endpoint when button is clicked', async () =>{
        await driver.get(homeUrl);
        await driver.findElement(webdriver.By.linkText('Available Jobs')).click();
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
        const roleName2 = await driver.findElement(webdriver.By.id('jobName10')).getText();
        expect(roleName1).to.equal('Software Engineer');
        expect(roleName2).to.equal('Database Administrator');
    })
  })

  describe('AWS - Correct locations for the rols', () =>{
    it('The location for each role in the table should have the correct location', async () =>{
        await driver.get(url);

        const location1 = await driver.findElement(webdriver.By.id('jobLocation1')).getText();
        const location2 = await driver.findElement(webdriver.By.id('jobLocation10')).getText();

        expect(location1).to.equal('Derry');
        expect(location2).to.equal('New York');

    })
  })

  describe('AWS - Correct Capability for the roles', () =>{
    it('Should return the correct capability for the specific role', async () =>{
      await driver.get(url);

      const capability1 = await driver.findElement(webdriver.By.id('jobCapability1')).getText();
      const capability2 = await driver.findElement(webdriver.By.id('jobCapability10')).getText();

      expect(capability1).to.equal('Engineering');
      expect(capability2).to.equal('Engineering');
    })
  })

  describe('AWS - Correct Capability for the roles', () =>{
    it('Should return the correct band for the specific role', async () =>{
      await driver.get(url);

      const band1 = await driver.findElement(webdriver.By.id('jobBand1')).getText();
      const band2 = await driver.findElement(webdriver.By.id('jobBand10')).getText();

      expect(band1).to.equal('Trainee');
      expect(band2).to.equal('Consultant');
    })
  })

})