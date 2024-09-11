import express from "express";
import {getJobDetailsById, getJobs} from "../services/JobRoleService"

export const getJobsList = async (req: express.Request, res: express.Response): Promise<void> => {
    try{

        const page = parseInt(req.query.page as string) || 1;
        const pageSize = parseInt(req.query.pageSize as string) || 10;
        const response = await getJobs(page, pageSize, req.session.token);
        const { jobRoles, pagination } = response;
        
        res.render("job-role-list.html", { JobRoles: jobRoles, Pagination: pagination } );

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
        res.render('job-role-list.html', {errormessage: e.message, JobRoles: await getJobs(page, pageSize, req.session.token) });
    }
}