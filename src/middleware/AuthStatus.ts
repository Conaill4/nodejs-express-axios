import express from "express";

export const checkLoginStatus = (req: express.Request): boolean => {
    return !!req.session.token;
}