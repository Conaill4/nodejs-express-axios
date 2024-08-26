import axios, {AxiosResponse} from "axios";
import { JobRole } from "../models/JobRole";

export const getJobs = async (): Promise<JobRole[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/job-roles")

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get any Jobs')
    }
}
