import express from "express";
import {createJobRole, getJobDetailsById, getJobs} from "../services/JobRoleService"
import { JwtToken } from "../models/JwtToken";
import { jwtDecode } from "jwt-decode";
import { getBands } from "../services/BandService";
import { getCapabilities } from "../services/CapabilityService";

export const getJobsList = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        const fieldName = (req.query.fieldName as string) || "jobRoleId";
        const orderBy = (req.query.orderBy as string) || "ASC";
        const page = parseInt(req.query.page as string) || 1;
        const pageSize = parseInt(req.query.pageSize as string) || 10;
        const response = await getJobs(fieldName, orderBy, page, pageSize, req.session.token);

        const decodedToken: JwtToken = jwtDecode(req.session.token);
        const roleid = decodedToken.Role;

        const { jobRoles, pagination, roleOrdering } = response;
        
        res.render("job-role-list.html", { JobRoles: jobRoles, Pagination: pagination, Number: roleid, RoleOrdering: roleOrdering} );

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

export const getNewJobForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
    
       res.render('add-new-job-role.html', { bands: await getBands(), capabilities: await getCapabilities()  });
    }
    catch (e) {     
        console.log(e);
        res.render('home.html', {errormessage: "Unable to find the specified page."});
    }
}

export const postNewJobForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        const jobData = req.body;
        const id = await createJobRole(jobData,req.session.token);
        res.redirect('/job-roles/' + id)
    }
    catch (e) {     
        res.render('add-new-job-role.html', {errormessage: e.message,bands: await getBands(), capabilities: await getCapabilities() });
    }
}