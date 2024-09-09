import axios, {Axios, AxiosResponse} from "axios";
import { JobRoleDetailedResponse } from "../models/JobRoleDetailedResponse";
import { JobRoleResponseWrapper } from "../models/JobRoleResponseWrapper";
axios.defaults.baseURL = process.env.API_URL || 'http://localhost:8080/';


export const URL: string = "/api/job-roles";

export const getJobs = async (page: Number, pageSize: Number): Promise<JobRoleResponseWrapper> => {
    try {
        const response: AxiosResponse<JobRoleResponseWrapper> = await axios.get(`http://localhost:8080/api/job-roles?page=${String(page)}&pageSize=${String(pageSize)}`);
        
        var x = response.data;

        return x;


    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 404) {
                throw new Error('No job roles open');
            }
            else if (error.response?.status === 500) {
                throw new Error('Server Error');
            }
            throw new Error('Server Error');
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}

export const getJobDetailsById = async (id: string): Promise<JobRoleDetailedResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get(URL+id)
        return response.data;
    } catch (e) {
        if(e.response?.status === 404){
            throw new Error("Sorry, the job you tried to find is unavailable.");
        }     
         throw new Error("Sorry, an unknown error has occurred.");
    }
}