import { LoginRequest } from "../models/LoginRequest";

export const validateLoginRequest = function (loginRequest: LoginRequest): void {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
    if (loginRequest.email == "" || loginRequest.email == null) {
        throw new Error("Email is empty.");
    }
    if (!emailRegex.test(loginRequest.email)) {
        throw new Error("Email is invalid.");
    }
    if (loginRequest.password == "" || loginRequest.password == null) {
        throw new Error("Password is empty.");
    }
    if (!passwordRegex.test(loginRequest.password)) {
        throw new Error("Password is invalid.");
    }
}