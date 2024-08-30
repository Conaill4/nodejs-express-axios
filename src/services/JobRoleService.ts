import axios, {AxiosResponse} from "axios";
import { JobRole } from "../models/JobRole";
import { JobRoleDetailedResponse } from "../models/JobRoleDetailedResponse";
axios.defaults.baseURL = process.env.API_URL || 'http://localhost:8080/';

export const URL: string = "/api/job-roles/";

export const getJobs = async (): Promise<JobRole[]> => {
    try {
        const response: AxiosResponse = await axios.get(URL)

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get any Jobs')
    }
}

export const getJobByID_ = async (id: string): Promise<JobRoleDetailedResponse> => {
    try {
        const response: AxiosResponse = await axios.get(URL + id)

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get Job')
    }
}