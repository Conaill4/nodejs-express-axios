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
        if(e.response?.status === 404){
           const errormessage = "Sorry, the job you tried to find is unavailable.";
               
           res.render('job-role-list.html', {errormessage: errormessage, JobRoles: await getJobs() });

        }
    }
}