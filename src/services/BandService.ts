import axios, { AxiosResponse } from "axios";
import { Band } from "../models/Band";

axios.defaults.baseURL = process.env.API_URL || 'http://localhost:8080';

export const URL: string = "/api/Band";

export const getBands = async(): Promise<Band[]> => {

    try {
        const response: AxiosResponse = await axios.get(URL);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get bands');
    }

}