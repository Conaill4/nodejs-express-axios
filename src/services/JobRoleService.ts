import axios, {AxiosResponse} from "axios";
import { JobRole } from "../models/JobRole";

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
