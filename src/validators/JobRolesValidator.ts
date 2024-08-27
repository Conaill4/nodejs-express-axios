import { JobRole } from "../models/JobRole"

export const validateJobRoles = function (jobRole: JobRole): void {
    if (jobRole.jobRoleId < 1) {
        throw new Error ("Invalid Id please try again");
    }
    if (jobRole.roleName.length < 5) {
        throw new Error ("There is no role under that descripion");
    }
    if (jobRole.roleName.charAt(0) !== jobRole.roleName.charAt(0).toUpperCase() ) {
        throw new Error ("Job role should start with a uppercase");
    }
    if (jobRole.location.length > 35 ) {
        throw new Error ("Invalid Location -> too long");
    }
    if (jobRole.location.length < 4 ) {
        throw new Error ("Invalid Location -> too short");
    }
 


/*export const validateEmployeeRequest = function (employeeRequest: EmployeeRequest): void {
    if (employeeRequest.salary < 20000) {
        throw new Error("Salary must be at least £20,000");
    }

    if (employeeRequest.bankNo.length != 8) {
        throw new Error("Invalid bank number");
    }

    if (employeeRequest.fname.length > 50) {
        throw new Error("First Name is to long");
    }

    if (employeeRequest.lname.length > 50) {
        throw new Error("Last Name is to long");
    }

    if (employeeRequest.nin.length != 8) {
        throw new Error("Incorrect National Insurance Number");
    }

*/
}