import { JobRoleDetailedResponse } from "../models/JobRoleDetailedResponse"

export const validateJobRoleDetailed = function (jobRoleDetailed: JobRoleDetailedResponse): void {
    if (jobRoleDetailed.description.length > 500) {
        throw new Error ("Invalid Description -> too long");
    }
    if (jobRoleDetailed.numberOfOpenPositions == 0) {
        throw new Error ("Number of positions cannot be 0")
    } 
    if (jobRoleDetailed.responsibilities.length > 400) {
        throw new Error ("Invalid Responsibilities -> too long");
    }
    if (jobRoleDetailed.status !== "OPEN" && jobRoleDetailed.status !== "CLOSED") {
        throw new Error("Invalid status - must be 'OPEN' or 'CLOSED'");
    }
}