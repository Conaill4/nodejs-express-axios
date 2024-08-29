import express from "express";
import {getJobs} from "../services/JobRoleService"

export const getJobsList = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        res.render("pages/job-role-list", { JobRoles: await getJobs() } );
    }
    catch (e) {
        res.locals.errormessage = e.message;
        res.render('pages/job-role-list');
    }
}

export const getHomePage = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        res.render("pages/job-role-list");
    }
    catch (e) {
        res.locals.errormessage = e.message;
    }
}
