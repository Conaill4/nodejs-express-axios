import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from 'chai';
import { getJobs, URL } from '../../../src/services/JobRoleService';
import { JobRole } from "../../../src/models/JobRole";
import { describe, it } from "node:test";

const jobRole: JobRole = {
    jobRoleId: 1,
    roleName: "Graduate Software Engineer",
    location: "Derry",
    capabilityId: 1,
    bandId: 2,
    Date: new Date(1693078000000)
}

const mock = new MockAdapter(axios);

describe('JobRoleService', function () {
    describe('getJobs', function () {
      it('should return jobs from response', async () => {
        const data = [jobRole];

        mock.onGet(URL).reply(200, data);

        const results = await getJobs();
        expect(new Date(results[0].Date)).to.deep.equal(jobRole.Date);
      })

      it('should throw exception when 500 error returned from axios', async () => {
        mock.onGet(URL).reply(500);

        try {
          await getJobs();
        } catch (e) {
          expect(e.message).to.equal('Failed to get any Jobs');
          return;
        }
      })

    })})