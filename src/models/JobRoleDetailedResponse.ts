import { JobRole } from "./JobRole"

export type JobRoleDetailedResponse = {
    jobRole: JobRole,
    description: string,
    responsibilities: string,
    sharePointUrl: string,
    numberOfOpenPositions: Number,
    status: string
}