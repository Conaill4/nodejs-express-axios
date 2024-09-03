import axios, {AxiosResponse} from "axios";
import { JobRole } from "../models/JobRole";
import { JobRoleDetailedResponse } from "../models/JobRoleDetailedResponse";
axios.defaults.baseURL = process.env.API_URL || 'http://localhost:8080/';

export const URL: string = "/api/job-roles?limit=10&offset=3";

export const getJobs = async (limit: Number, offset: Number): Promise<JobRole[]> => {
    try {

        var urlWithParams = URL + 'limit=' + limit + "&offset=" + offset;
        const response: AxiosResponse = await axios.get(urlWithParams);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get any Jobs')
    }
}

export const getJobDetailsById = async (id: string): Promise<JobRoleDetailedResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get(URL+id)

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get Job')
    }
}