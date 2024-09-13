export type JobRoleRequest = {
    roleName: string,
    description: string,
    sharepointUrl: string,
    responsibilities: string,
    numberOfOpenPositions: number
    location: string,
    closingDate: Date, 
    bandId: number,
    capabilityId: number,
}