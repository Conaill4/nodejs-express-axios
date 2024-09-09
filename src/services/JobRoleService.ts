import axios, {AxiosResponse} from "axios";
import { JobRole } from "../models/JobRole";
import { JobRoleDetailedResponse } from "../models/JobRoleDetailedResponse";
import { getHeader } from "./AuthUtils";
axios.defaults.baseURL = process.env.API_URL || 'http://localhost:8080/';

export const URL: string = "/api/job-roles/";

export const getJobs = async (token: string): Promise<JobRole[]> => {
    try {
        const response: AxiosResponse = await axios.get(URL, getHeader(token))

        return response.data;
    } catch (e) { 
        if(e.response?.status === 500){
            throw new Error('Failed to get any Jobs')
        }     
        throw new Error("Unknown error occurred");
    }
}

export const getJobDetailsById = async (id: string, token: string): Promise<JobRoleDetailedResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get(URL+id, getHeader(token))

        return response.data;
    } catch (e) {
        if(e.response?.status === 404){
            throw new Error("Sorry, the job you tried to find is unavailable.");
        }     
         throw new Error("Sorry, an unknown error has occurred.")
    }
}