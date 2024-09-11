import { JobRole } from "./JobRole";
import { Pagination } from "./Pagination";

export type JobRoleResponseWrapper = {
    jobRoles: JobRole[];
    pagination: Pagination;
}