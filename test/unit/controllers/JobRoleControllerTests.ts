import * as JobRoleController from "../../../src/controllers/JobRoleController";
import * as JobRoleService from "../../../src/services/JobRoleService";
import { expect } from 'chai';
import { JobRole } from "../../../src/models/JobRole";
import sinon from 'sinon';

const jobRole: JobRole = {
    jobRoleId: 1,
    roleName: "Graduate Software Engineer",
    location: "Derry",
    capabilityId: 1,
    bandId: 2,
    Date: new Date(1693078000000)
}

describe('JobRoleController', function () {
    afterEach(() => {
        sinon.restore();
    });

    describe('getJobs', function () {
      it('should render view with jobs when returned', async () => {
        const jobRoleList = [jobRole];

        sinon.stub(JobRoleService, 'getJobs').resolves(jobRoleList);

        const req = { };
        const res = { render: sinon.spy() };

        await JobRoleController.getJobsList(req as any, res as any);
        console.log("ALL JOBS " + jobRoleList[0]);

        expect(res.render.calledOnce).to.be.true;
        expect(res.render.calledWith('job-role-list', { jobs: jobRoleList })).to.be.false;
      });

      it('should render view with error message when error thrown', async () => {
        const errorMessage: string = 'Error message';
        sinon.stub(JobRoleService, 'getJobs').rejects(new Error(errorMessage));

        const req = { };
        const res = { render: sinon.spy(), locals: { errormessage: '' } };

        await JobRoleController.getJobsList(req as any, res as any);

        expect(res.render.calledOnce).to.be.true;
        expect(res.render.calledWith('job-role-list')).to.be.true;
        expect(res.locals.errormessage).to.equal(errorMessage);
      });
    });
});
