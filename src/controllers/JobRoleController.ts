import express from "express";
import {getJobs} from "../services/JobRoleService"

export const getJobsList = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        res.render("job-role-list-new.html", { JobRoles: await getJobs() } );
    }
    catch (e) {
        res.locals.errormessage = e.message;
        res.render('job-role-list-new.html');
    }
}

export const getHomePage = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        res.render("home.html");
    }
    catch (e) {
        res.locals.errormessage = e.message;
    }
}
