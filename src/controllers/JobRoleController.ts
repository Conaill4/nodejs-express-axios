import express from "express";
import {getJobByID_, getJobs} from "../services/JobRoleService"

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
        
        res.render("job-role-information.html", { JobRoleDetailedResponse: await getJobByID_(req.params.id) } );
    }
    catch (e) {
        res.locals.errormessage = e.message;
        res.render('job-role-information.html');
    }
}