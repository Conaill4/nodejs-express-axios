import { JobRole } from "./JobRole"

export type JobRoleDetailedResponse = {
    jobRole: JobRole,
    description: string,
    responsibilities: string,
    sharePointUrl: string,
    numberOfOpenPositions: number,
    status: string
}