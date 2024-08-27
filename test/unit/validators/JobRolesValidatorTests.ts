import { validateJobRoles } from '../../../src/validators/JobRolesValidator';
import { JobRole } from '../../../src/models/JobRole'
import { assert, expect } from 'chai';

describe('JobRolesValidator', function () {
    describe('validateJobRoles', function () {
      it('should not throw exception when errors', () => {
        const jobRole: JobRole = {
            
            jobRoleId: 1,
            roleName: "Graduate Software Engineer",
            location: "Derry",
            capabilityId: 1,
            bandId: 2,
            Date: new Date(1693078000000)
        }
     try{
        validateJobRoles(jobRole)
     }
     catch(e){
        assert.fail("Expected no error message ")
     }
    })

/*
    Test 2

    Write a unit test for the validateJobRoles method

    When the jobRole ID number is less than 1 characters

    Expect error to be returned

    Should return error Invalid Id please try again
*/

it('should throw exception when jobRoleID is null', () => {
    const jobRole: JobRole = {
        
        jobRoleId: 0,
        roleName: "Graduate Software Engineer",
        location: "Derry",
        capabilityId: 1,
        bandId: 2,
        Date: new Date(1693078000000)
    }
 try{
    validateJobRoles(jobRole)
 }
 catch(e){
    expect(e.message).to.equal("Invalid Id please try again");
    return;
 }
})

/*
    Test 3

    Write a unit test for the validateJobRoles method

    When the jobRole name should be less than 5

    Expect error to be returned

    Should return error There is no role under that descripion
*/

it('should throw exception when rolename is less than 5 ', () => {
    const jobRole: JobRole = {
        
        jobRoleId: 1,
        roleName: "Test",
        location: "Derry",
        capabilityId: 1,
        bandId: 2,
        Date: new Date(1693078000000)
    }
 try{
    validateJobRoles(jobRole)
 }
 catch(e){
    expect(e.message).to.equal("There is no role under that descripion");
    return;
 }
}
)

/*
    Test 4

    Write a unit test for the validateJobRoles method

    When the jobRole name should start with a Capital
    Expect error to be returned

    Should return error Job role should start with a uppercase
*/

it('should throw exception when rolename doesnt start with a capital', () => {
    const jobRole: JobRole = {
        
        jobRoleId: 1,
        roleName: "graduate Software Engineer",
        location: "Derry",
        capabilityId: 1,
        bandId: 2,
        Date: new Date(1693078000000)
    }
 try{
    validateJobRoles(jobRole)
 }
 catch(e){
    expect(e.message).to.equal("Job role should start with a uppercase");
    return;
 }
}
)

/*
    Test 5

    Write a unit test for the validateJobRoles method

    When the location greater than 35 characters
    Expect error to be returned

    Should return error Invalid Location -> too long
*/

it('should throw exception when location is too long', () => {
    const jobRole: JobRole = {
        
        jobRoleId: 1,
        roleName: "Graduate Software Engineer",
        location: "asdfghjklqwertyuiopzxcvbnmasdfghjklqwertyuiopzxcvbnmasdfghjkl",
        capabilityId: 1,
        bandId: 2,
        Date: new Date(1693078000000)
    }
 try{
    validateJobRoles(jobRole)
 }
 catch(e){
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
        Date: new Date(1693078000000)
    }
 try{
    validateJobRoles(jobRole)
 }
 catch(e){
    expect(e.message).to.equal("Invalid Location -> too short");
    return;
 }
}
)

})})