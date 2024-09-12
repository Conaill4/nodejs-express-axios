import express from "express";
import {createJobRole, getJobDetailsById, getJobs} from "../services/JobRoleService"
import { JwtToken } from "../models/JwtToken";
import { jwtDecode } from "jwt-decode";
import { getBands } from "../services/BandService";
import { getCapabilities } from "../services/CapabilityService";
import { JobRoleRequest } from "../models/JobRoleRequest";

export const getJobsList = async (req: express.Request, res: express.Response): Promise<void> => {
    try{

        const page = parseInt(req.query.page as string) || 1;
        const pageSize = parseInt(req.query.pageSize as string) || 10;
        const response = await getJobs(page, pageSize, req.session.token);

        const decodedToken: JwtToken = jwtDecode(req.session.token);
        const roleid = decodedToken.Role;

        const { jobRoles, pagination } = response;
        
        res.render("job-role-list.html", { JobRoles: jobRoles, Pagination: pagination, Number: roleid } );

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

export const getNewJobForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
    
       res.render('add-new-job-role.html', { bands: await getBands(), capabilities: await getCapabilities()  });
    }
    catch (e) {     
        res.render('home.html', {errormessage: "Unable to find the specified page."});
    }
}

export const postNewJobForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        const id = await createJobRole(req.body.fieldname,req.params.id, req.session.token);
        res.redirect('/job-roles/' + id)
    }
    catch (e) {     
        res.render('add-new-job-role.html', {errormessage: e.message,bands: await getBands(), capabilities: await getCapabilities() });
    }
}