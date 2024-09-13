import axios, { AxiosResponse } from "axios";
import { Capability } from "../models/Capability";


axios.defaults.baseURL = process.env.API_URL || 'http://localhost:8080';

export const URL: string = "/api/Capability";

export const getCapabilities = async(): Promise<Capability[]> => {

    try {
        const response: AxiosResponse = await axios.get(URL);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get capabilities');
    }

}