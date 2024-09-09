import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import webdriver, { WebDriver } from 'selenium-webdriver';

describe('Job Role Info Page Tests - AWS', () => {
    let driver: WebDriver;
    const url: string = 'https://sbpkguvypc.eu-west-1.awsapprunner.com/job-roles';

    before(async () => {
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
    });

    after(async () => {
        await driver.quit();
    });

    describe('AWS - correct role page for software engineer', () => {
        it('When role name link is clicked, the role info page should be for the correct role - Software Engineer', async () => {

            //Navigate to job role info page
            await driver.get(url);

            //Select job role one link, extract it's text and click
            const roleOneButton = await driver.findElement(webdriver.By.id('jobName1'));
            const roleOneButtonText = await roleOneButton.getText();
            await roleOneButton.click();

            // Get URL after click and extract text of role name in job info page
            const infoPageURL = await driver.getCurrentUrl();
            const infoPageRole = await driver.findElement(webdriver.By.id('roleName')).getText();

            // Compare URL and role name to expected
            expect(infoPageURL).to.equal('https://sbpkguvypc.eu-west-1.awsapprunner.com/job-roles/1');
            expect(infoPageRole).to.equal(roleOneButtonText);

        })
    })

    describe('AWS - correct role page for Tester', () => {
        it('When role name link is clicked, the role info page should be for the correct role - Tester', async () => {

            //Navigate to job role info page
            await driver.get(url);

            //Select job role one link, extract it's text and click
            const roleTwoButton = await driver.findElement(webdriver.By.id('jobName2'));
            const roleTwoButtonText = await roleTwoButton.getText();
            await roleTwoButton.click();

            // Get URL after click and extract text of role name in job info page
            const infoPageURL = await driver.getCurrentUrl();
            const infoPageRole = await driver.findElement(webdriver.By.id('roleName')).getText();

            // Compare URL and role name to expected
            expect(infoPageURL).to.equal('https://sbpkguvypc.eu-west-1.awsapprunner.com/job-roles/2');
            expect(infoPageRole).to.equal(roleTwoButtonText);

        })
    })

    describe('AWS - Job Role Details Page should return correct values in each for Tester (id = 2)', () => {

        it('should display the job role name', async () => {
            //Navigate to job role 2 on only the first it within the method
            await driver.get(url + "/2");
            const jobRoleName = await driver.findElement(webdriver.By.id('roleName')).getText();
            expect(jobRoleName).to.equal('Tester');
        });

        it('should display the job description', async () => {
            const description = await driver.findElement(webdriver.By.id('description')).getText();
            expect(description).to.equal('Kainos Test Engineer role in Derry');
        });

        it('should display the responsibilities', async () => {
            const responsibilities = await driver.findElement(webdriver.By.id('responsibilities')).getText();
            expect(responsibilities).to.equal('You will be responsible for testing software for clients all over the world');
        });

        it('should display the sharepoint link', async () => {
            const location = await driver.findElement(webdriver.By.id('sharepointLink')).getText();
            expect(location).to.equal('https://www.microsoft.com/en-gb/microsoft-365/sharepoint/collaboration');
        });

        it('should display the location', async () => {
            const location = await driver.findElement(webdriver.By.id('location')).getText();
            expect(location).to.equal('Derry');
        });

        it('should display the capability', async () => {
            const location = await driver.findElement(webdriver.By.id('capability')).getText();
            expect(location).to.equal('Testing');
        });

        it('should display the band', async () => {
            const location = await driver.findElement(webdriver.By.id('band')).getText();
            expect(location).to.equal('Manager');
        });

        it('should display the closingDate', async () => {
            const location = await driver.findElement(webdriver.By.id('closingDate')).getText();
            expect(location).to.equal('Thursday 26 Dec 2024');
        });

        it('should display the currentStatus', async () => {
            const location = await driver.findElement(webdriver.By.id('currentStatus')).getText();
            expect(location).to.equal('OPEN');
        });

        it('should display the availablePositions', async () => {
            const location = await driver.findElement(webdriver.By.id('availablePositions')).getText();
            expect(location).to.equal('2');
        });

    });

    describe('AWS - Job Role Details Page should return correct values in each for software engineer(id = 1)', () => {

        it('should display the job role name', async () => {
            //Navigate to job role 1 on only the first it within the method
            await driver.get(url + "/1");
            const jobRoleName = await driver.findElement(webdriver.By.id('roleName')).getText();
            expect(jobRoleName).to.equal('Software Engineer');
        });

        it('should display the job description', async () => {
            const description = await driver.findElement(webdriver.By.id('description')).getText();
            expect(description).to.equal('Kainos Software Engineer role in Derry');
        });

        it('should display the responsibilities', async () => {
            const responsibilities = await driver.findElement(webdriver.By.id('responsibilities')).getText();
            expect(responsibilities).to.equal('You will be responsible for managing and updating software for clients all over the world');
        });

        it('should display the sharepoint link', async () => {
            const location = await driver.findElement(webdriver.By.id('sharepointLink')).getText();
            expect(location).to.equal('https://www.microsoft.com/en-gb/microsoft-365/sharepoint/collaboration');
        });

        it('should display the location', async () => {
            const location = await driver.findElement(webdriver.By.id('location')).getText();
            expect(location).to.equal('Derry');
        });

        it('should display the capability', async () => {
            const location = await driver.findElement(webdriver.By.id('capability')).getText();
            expect(location).to.equal('Engineering');
        });

        it('should display the band', async () => {
            const location = await driver.findElement(webdriver.By.id('band')).getText();
            expect(location).to.equal('Trainee');
        });

        it('should display the closingDate', async () => {
            const location = await driver.findElement(webdriver.By.id('closingDate')).getText();
            expect(location).to.equal('Wednesday 25 Dec 2024');
        });

        it('should display the currentStatus', async () => {
            const location = await driver.findElement(webdriver.By.id('currentStatus')).getText();
            expect(location).to.equal('OPEN');
        });

        it('should display the availablePositions', async () => {
            const location = await driver.findElement(webdriver.By.id('availablePositions')).getText();
            expect(location).to.equal('3');
        });

    });

    describe('Invalid ID - correct redirect and error message', async ()=>{
        it('If a user goes to an endpoint of an invalid ID - they should be directed to the job role list', async ()=>{
            // Navigate to endpoint with invalid ID (doesn't exist in DB)
            await driver.get(url + '/300');
            const newPage = await driver.getTitle();
            expect(newPage).to.equal('Job Roles - Kainos');
        })

        it('when the page redirects - the correct error message should appear', async ()=>{
            await driver.get(url + '/300');
            const errorMessage = await driver.findElement(webdriver.By.className('error-message')).getText();
            expect(errorMessage).to.equal('Sorry, the job you tried to find is unavailable.')
        })
    })

    describe('Non numeric endpoint - correct redirect and error message', async ()=>{
        it('If a user goes to an endpoint of an invalid ID - they should be directed to the job role list', async ()=>{
            // Navigate to endpoint with invalid ID (doesn't exist in DB)
            await driver.get(url + '/TestIncorrectEndpoint');
            const newPage = await driver.getTitle();
            expect(newPage).to.equal('Job Roles - Kainos');
        })

        it('when the page redirects - the correct error message should appear', async ()=>{
            await driver.get(url + '/TestIncorrectEndpoint');
            const errorMessage = await driver.findElement(webdriver.By.className('error-message')).getText();
            expect(errorMessage).to.equal('Sorry, the job you tried to find is unavailable.')
        })
    })

    describe('Working back button', ()=>{
        it('When the user clicks the back button on the job role info page - it should direct to job role list page', async ()=>{
            await driver.get(url + '/1');
            await driver.findElement(webdriver.By.xpath("//a[contains(text(),'← Back')]")).click();
            const newPage = await driver.getTitle();
            expect(newPage).to.equal('Job Roles - Kainos');
        })
    })

})
