import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from 'chai';
import { getJobs, URL, getJobDetailsById, createJobRole} from '../../src/services/JobRoleService';
import { JobRole } from "../../src/models/JobRole";
import { afterEach, beforeEach, describe, it } from "node:test";
import { JobRoleDetailedResponse } from "../../src/models/JobRoleDetailedResponse";
import { JobRoleResponseWrapper } from "../../src/models/JobRoleResponseWrapper";
import { JobRoleRequest } from "../../src/models/JobRoleRequest";

const jobRole1: JobRole = {
  jobRoleId: 1,
  roleName: "Graduate Software Engineer",
  location: "Derry",
  capabilityId: 1,
  bandId: 2,
  closingDate: new Date(1693078000000),
}

const JobRoleResponseWrapperTest: JobRoleResponseWrapper = {
  jobRoles: [jobRole1],
  pagination: {
    currentPage: 1,
    totalPages: 5,
    nextPage: 2,
    previousPage: 1
  }
}

const jobRoleDetailed: JobRoleDetailedResponse = {
    jobRole: {
      jobRoleId: 1,
      roleName: "Graduate Software Engineer",
      location: "Derry",
      capabilityId: 1,
      bandId: 2,
      closingDate: new Date(1693078000000),
    },
    description: "Software Engineer Derry",
    responsibilities: "Managing Software",
    sharePointUrl: "123.com",
    numberOfOpenPositions: 3,
    status: "OPEN"
}

describe('createJobRole', function () {
  let mock: MockAdapter;
  const URL = 'api/job-roles';  
  const jobRole: JobRoleRequest = {
    
    roleName: 'Software Engineer',
    description: 'Develops software applications',
    sharepointUrl: 'http://sharepoint-url',
    responsibilities: 'Coding, testing, debugging',
    numberOfOpenPositions: 5,
    location: 'Remote',
    closingDate: new Date('2024-09-12'),
    bandId: 1,
    capabilityId: 2
  };
  const token = '123abc';

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should create a job role and return the job role ID', async () => {
    const responseData = 1001;  // Assume this is the job role ID returned by the API

    // Mock the POST request to return a successful response
    mock.onPost(URL).reply(200, responseData);

    // Call the function you're testing
    const result = await createJobRole(jobRole, token);

    // Verify the result is what you expect
    expect(result).to.equal(responseData);
  });

  it('should throw an error if the API request fails', async () => {
    const errorMessage = 'Failed to create job role';

    // Mock the POST request to return an error
    mock.onPost(URL).reply(500, { message: errorMessage });

    try {
      await createJobRole(jobRole, token);
    } catch (e) {
      // Verify that the error message is what you expect
      expect(e.message).to.equal(errorMessage);
    }
  });
});


const mock = new MockAdapter(axios);

describe('JobRoleService', function () {
  
    describe('getJobs', function () {
      it('should return jobs from response', async () => {
        const data = JobRoleResponseWrapperTest;
        const Page = 1;
        const pageSize = 10;
        mock.onGet(URL + `?page=${Page}&pageSize=${pageSize}`).reply(200, data);
        console.log("consdf");
        const results = await getJobs(1,10,"123");

        expect(results.jobRoles[0].jobRoleId).to.deep.equal(jobRole1.jobRoleId)
        expect(results.jobRoles[0].roleName).to.deep.equal(jobRole1.roleName)
      })

      it('should throw exception when 500 error returned from axios', async () => {
        mock.onGet(URL).reply(500);
        try {
          await getJobs(1,10,"token");
        } catch (e) {
          expect(e.message).to.equal('Failed to get any Jobs');
          return;
        }
      })

      describe('getDetailedJobInfo', function () {
        it('should return detailed information for the job', async () => {
          const data = [jobRoleDetailed];  
          mock.onGet(URL + "/" + jobRoleDetailed.jobRole.jobRoleId).reply(200, data);
          const results = await getJobDetailsById((jobRoleDetailed.jobRole.jobRoleId).toString(), "123");

          results[0].jobRole.closingDate = new Date(results[0].jobRole.closingDate);
          expect(results[0].jobRole).to.deep.equal(jobRoleDetailed.jobRole)
          expect(results[0].description).to.deep.equal(jobRoleDetailed.description)
          expect(results[0].responsibilities).to.deep.equal(jobRoleDetailed.responsibilities)
          expect(results[0].sharePointUrl).to.deep.equal(jobRoleDetailed.sharePointUrl)
          expect(results[0].numberOfOpenPositions).to.deep.equal(jobRoleDetailed.numberOfOpenPositions)
          expect(results[0].status).to.deep.equal(jobRoleDetailed.status)
        })

  
        it('should throw exception when 500 error returned from axios', async () => {
          mock.onGet(URL+jobRoleDetailed.jobRole.jobRoleId).reply(500);
          try {
            await getJobDetailsById((jobRoleDetailed.jobRole.jobRoleId).toString(), "123");
          } catch (e) {
            expect(e.message).to.equal('Sorry, an unknown error has occurred.');
            return;
          }
        })
    })})
  })