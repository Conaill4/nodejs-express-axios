import axios, { AxiosResponse} from "axios";
import { LoginRequest } from "../models/LoginRequest";

axios.defaults.baseURL = process.env.API_URL || 'http://localhost:8080/';

export const URL: string = "/api/auth/login";

export const getToken = async (loginRequest: LoginRequest): Promise<string> => {
    try {
        const response: AxiosResponse = await axios.post(URL, loginRequest);

        return response.data;
    } catch (e) {
        if(e.response?.status === 500)
            {
                throw new Error('Failed to get user');
            }
            throw new Error('User does not exist');
    }
}