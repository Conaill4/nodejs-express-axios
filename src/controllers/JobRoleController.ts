import express from "express";
import {getJobDetailsById, getJobs} from "../services/JobRoleService"

export const getJobsList = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        const fieldName = (req.query.fieldName as string) || "jobRoleId";
        const orderBy = (req.query.orderBy as string) || "ASC";
        const page = parseInt(req.query.page as string) || 1;
        const pageSize = parseInt(req.query.pageSize as string) || 10;
        const response = await getJobs(fieldName, orderBy, page, pageSize, req.session.token);
        const { jobRoles, pagination, roleOrdering } = response;
        
        res.render("job-role-list.html", { JobRoles: jobRoles, Pagination: pagination, RoleOrdering: roleOrdering} );

    }
    catch (e) {
        res.locals.errormessage = e.message;
        res.render('job-role-list.html');
    }

}

export const getJobByID = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        const JobRoleDetailedResponse = await getJobDetailsById(req.params.id, req.session.token)
        res.render("job-role-information.html", { JobRoleDetailedResponse } );
    }
    catch (e) {        
        const page = 1;
        const pageSize = 10;
        const fieldName = "jobRoleId";
        const orderBy = "ASC";
        const response = await getJobs(fieldName, orderBy, page, pageSize, req.session.token);
        const { jobRoles, pagination } = response;    
        res.render('job-role-list.html', {errormessage: e.message, JobRoles: jobRoles, Pagination: pagination, Token: req.session.token});
    }
}