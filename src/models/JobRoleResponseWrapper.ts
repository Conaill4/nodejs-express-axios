import { JobRole } from "./JobRole";
import { RoleOrdering } from "./RoleOrdering";
import { Pagination } from "./Pagination";

export type JobRoleResponseWrapper = {
    jobRoles: JobRole[];
    pagination: Pagination;
    roleOrdering: RoleOrdering;
}