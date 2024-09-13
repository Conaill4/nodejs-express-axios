import axios, { AxiosResponse} from "axios";
import { JobRoleDetailedResponse } from "../models/JobRoleDetailedResponse";
import { getHeader } from "./AuthUtils";
import { JobRoleResponseWrapper } from "../models/JobRoleResponseWrapper";
import { JobRoleRequest } from "../models/JobRoleRequest";

axios.defaults.baseURL = process.env.API_URL || 'http://localhost:8080/';

export const URL: string = "/api/job-roles";

export const getJobs = async (fieldName: string, orderBy: string, Page: number, pageSize: number, token: string): Promise<JobRoleResponseWrapper> => {
    try {
        const response: AxiosResponse = await axios.get(URL + `?fieldName=${fieldName}&orderBy=${orderBy}&page=${Page}&pageSize=${pageSize}`, getHeader(token))

        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            if (e.response?.status === 404) {
                throw new Error('No job roles open');
            }
            else if (e.response?.status === 500) {
                throw new Error('Server Error');
            }
        } else {
            throw new Error('An Unknown error occurred');
        }
    }
}

export const getJobDetailsById = async (id: string, token: string): Promise<JobRoleDetailedResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get(URL + "/" + id, getHeader(token))

        return response.data;
    } catch (e) {
        if(e.response?.status === 404){
            throw new Error("Sorry, the job you tried to find is unavailable.");
        }     
         throw new Error("Sorry, an unknown error has occurred.");
    }
}

export const createJobRole = async (jobRole: JobRoleRequest, token: string): Promise<number> => {
    
    try {
        const response: AxiosResponse = await axios.post(URL, jobRole, getHeader(token));
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to create job role');
    }
}