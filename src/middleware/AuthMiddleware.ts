import express  from "express";
import { jwtDecode } from "jwt-decode";
import { JwtToken, UserRole } from "../models/JwtToken";
import "core-js/stable/atob";

export const allowRoles = (allowedRoles: UserRole[]) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (!req.session.token) {
            return res.redirect('/loginForm')
        }

        const decodedToken: JwtToken = jwtDecode(req.session.token);
        if (!allowedRoles.includes(decodedToken.Role)) {
            const errormessage = "You do not have access to this page.";
            return res.render("home.html", { errormessage: errormessage });
        }

        next();
    }
}