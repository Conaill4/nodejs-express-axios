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
    if (jobRole.capabilityId < 1)
    {
        throw new Error ("Invalid capabilityId. Please select a valid capabilityId for this job")
    }
    if (jobRole.capabilityId > 6)
    {
        throw new Error ("Invalid capabilityId. Please select a valid capabilityId for this job")
    }
    if (jobRole.bandId < 1)
    {
        throw new Error ("Invalid bandId. Please select a valid bandId for this job")
    }
    if (jobRole.bandId > 6)
    {
        throw new Error ("Invalid bandId. Please select a valid bandId for this job")
    }

}