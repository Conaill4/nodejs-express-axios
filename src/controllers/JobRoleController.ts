import express from "express";
import {getJobDetailsById, getJobs} from "../services/JobRoleService"

export const getJobsList = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        res.render("job-role-list.html", { JobRoles: await getJobs() } );
    }
    catch (e) {
        res.locals.errormessage = e.message;
        res.render('job-role-list.html');
    }

}

export const getJobByID = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        const JobRoleDetailedResponse = await getJobDetailsById(req.params.id)
        res.render("job-role-information.html", { JobRoleDetailedResponse } );
    }
    catch (e) {        
           res.render('job-role-list.html', {errormessage: e.message, JobRoles: await getJobs() });

    }
}