import axios, { AxiosResponse } from "axios";
import { LoginRequest } from "../models/LoginRequest";
import { validateLoginRequest } from "../validators/AuthValidator";

axios.defaults.baseURL = process.env.API_URL || 'http://localhost:8080/';

export const URL: string = "/api/auth/login";

export const getToken = async (loginRequest: LoginRequest): Promise<string> => {
    try {
        validateLoginRequest(loginRequest);
        
        const response: AxiosResponse = await axios.post(URL, loginRequest);

        return response.data;
    } catch (e) {
        if (e.message === 'Email is empty.') {
            throw new Error('Email is empty.');
        } else if (e.message === 'Email is invalid.') {
            throw new Error('Email is invalid.');
        } else if (e.message === 'Password is empty.') {
            throw new Error('Password is empty.');
        } else if (e.message === 'Password is invalid.') {
            throw new Error('Password is invalid.');
        }else if (e.response?.status === 500) {
            throw new Error('Failed to get user.');
        }
        throw new Error('Unknown Error Occurred.');
    }
}