import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from 'chai';
import { getJobs, URL, getJobDetailsById} from '../../src/services/JobRoleService';
import { JobRole } from "../../src/models/JobRole";
import { describe, it } from "node:test";
import { JobRoleDetailedResponse } from "../../src/models/JobRoleDetailedResponse";
import { JobRoleResponseWrapper } from "../../src/models/JobRoleResponseWrapper";

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