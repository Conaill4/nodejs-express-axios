import { validateJobRoles } from '../../src/validators/JobRolesValidator';
import { JobRole } from '../../src/models/JobRole'
import { JobRoleDetailedResponse } from '../../src/models/JobRoleDetailedResponse';
import { assert, expect } from 'chai';
import { describe, it} from 'node:test';

describe('JobRolesValidator', function () {
    describe('validateJobRoles', function () {
      it('should not throw exception', () => {
        const jobRole: JobRole = 
        {
            jobRoleId: 1,
            roleName: "Graduate Software Engineer",
            location: "Derry",
            capabilityId: 1,
            bandId: 2,
            closingDate: new Date(1693078000000)
        }
    try
        {
        validateJobRoles(jobRole)
        }
    catch
        {
        assert.fail("Expected no error message ")
        }
    }
)

it('should throw exception when jobRoleID is less than one character', () => {
    const jobRole: JobRole = 
    {
        jobRoleId: 0,
        roleName: "Graduate Software Engineer",
        location: "Derry",
        capabilityId: 1,
        bandId: 2,
        closingDate: new Date(1693078000000)
    }
    try
        {
            validateJobRoles(jobRole)
        }

    catch(e)
        {
            expect(e.message).to.equal("Invalid Id please try again");
            return;
        }
})


it('should throw exception when rolename is less than 5 characters', () => {
    const jobRole: JobRole = 
    {
        jobRoleId: 1,
        roleName: "Test",
        location: "Derry",
        capabilityId: 1,
        bandId: 2,
        closingDate: new Date(1693078000000)
    }
        try
            {
                validateJobRoles(jobRole)
            }
        catch(e)
            {
                expect(e.message).to.equal("There is no role under that descripion");
                return;
            }
    }
)

it('should throw exception when rolename doesnt start with a capital', () => {
    const jobRole: JobRole = 
    {
        jobRoleId: 1,
        roleName: "graduate Software Engineer",
        location: "Derry",
        capabilityId: 1,
        bandId: 2,
        closingDate: new Date(1693078000000)
    }
    try
        {
            validateJobRoles(jobRole)
        }
    catch(e)
        {
            expect(e.message).to.equal("Job role should start with a uppercase");
            return;
        }
    }
)

it('should throw exception when location is too long', () => {
    const jobRole: JobRole = 
    {
        jobRoleId: 1,
        roleName: "Graduate Software Engineer",
        location: "asdfghjklqwertyuiopzxcvbnmasdfghjklqwertyuiopzxcvbnmasdfghjkl",
        capabilityId: 1,
        bandId: 2,
        closingDate: new Date(1693078000000)
    }
    try
        {
            validateJobRoles(jobRole)
        }
    catch(e)
        {
            expect(e.message).to.equal("Invalid Location -> too long");
            return;
        }
    }
)

it('should throw exception when location is too short', () => {
    const jobRole: JobRole = {
        
        jobRoleId: 1,
        roleName: "Graduate Software Engineer",
        location: "asd",
        capabilityId: 1,
        bandId: 2,
        closingDate: new Date(1693078000000)
    }
    try
        {
            validateJobRoles(jobRole)
        }
    catch(e)
        {
            expect(e.message).to.equal("Invalid Location -> too short");
            return;
        }
    }
)

it('should throw exception when capabilityId is less than one', () => {
    const jobRole: JobRole = {
        
        jobRoleId: 1,
        roleName: "Graduate Software Engineer",
        location: "Derry",
        capabilityId: 0,
        bandId: 2,
        closingDate: new Date(1693078000000)
    }
    try
        {
            validateJobRoles(jobRole)
        }
    catch(e)
        {
            expect(e.message).to.equal("Invalid capabilityId. Please select a valid capabilityId for this job");
            return;
        }
    }
)

it('should throw exception when capabilityId is greater than the value of six', () => {
   const jobRole: JobRole = {
       
       jobRoleId: 1,
       roleName: "Graduate Software Engineer",
       location: "Derry",
       capabilityId: 20,
       bandId: 2,
       closingDate: new Date(1693078000000)
   }
    try
        {
        validateJobRoles(jobRole)
        }
    catch(e)
        {
        expect(e.message).to.equal("Invalid capabilityId. Please select a valid capabilityId for this job");
        return;
        }
    }
)
it('should throw exception when bandId is less than one', () => {
   const jobRole: JobRole = {
       
       jobRoleId: 1,
       roleName: "Graduate Software Engineer",
       location: "Derry",
       capabilityId: 1,
       bandId: 0,
       closingDate: new Date(1693078000000)
   }
    try
        {
        validateJobRoles(jobRole)
        }
    catch(e)
        {
        expect(e.message).to.equal("Invalid bandId. Please select a valid bandId for this job");
        return;
        }
    }
)

it('should throw exception when bandId is greater than six', () => {
   const jobRole: JobRole = 
   {
       jobRoleId: 1,
       roleName: "Graduate Software Engineer",
       location: "Derry",
       capabilityId: 1,
       bandId: 20,
       closingDate: new Date(1693078000000)
   }
    try
        {
        validateJobRoles(jobRole)
        }
    catch(e)
        {
        expect(e.message).to.equal("Invalid bandId. Please select a valid bandId for this job");
        return;
        }
    }
)
})})