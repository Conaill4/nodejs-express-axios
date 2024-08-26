import express from "express";
import {getJobs} from "../services/JobRoleService"

export const getJobsList = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render("job-role-list.html", { JobRoles: await getJobs() } )
}