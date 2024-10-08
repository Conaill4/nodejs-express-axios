import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";

import { getJobByID, getJobsList, getNewJobForm, postNewJobForm } from "./controllers/JobRoleController";
import { dateFilter } from "./filters/dateFilter";
import { getHomePage } from "./controllers/HomePageController";
import { getLoginForm, postLoginForm, logoutForm } from "./controllers/AuthController";
import { checkLoginStatus } from "./middleware/AuthStatus";
import { allowRoles } from "./middleware/AuthMiddleware";
import { UserRole } from "./models/JwtToken";
import { postSort } from "./controllers/SortController";

const app = express();
app.use(express.json());

const env = nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
});


env.addFilter('date', dateFilter);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(session({ secret: 'SUPER_SECRET', cookie: { maxAge: 28800000 } }));

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.locals.isLoggedIn = checkLoginStatus(req);
  next();
});

declare module "express-session" {
  interface SessionData {
    token: string;
  }
}

app.get('/job-roles', allowRoles([UserRole.User, UserRole.Admin]), (req, res) => {
  getJobsList(req, res);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.get('/', getHomePage);
app.get('/loginForm', getLoginForm);
app.post('/loginForm', postLoginForm);
app.post('/logout', allowRoles([UserRole.User, UserRole.Admin]), logoutForm);
app.get('/job-roles/:id', allowRoles([UserRole.User, UserRole.Admin]), getJobByID);
app.get('/add-new-job-role',allowRoles([UserRole.Admin]), getNewJobForm);
app.post('/add-new-job-role',allowRoles([UserRole.Admin]), postNewJobForm);
app.post('/sort', allowRoles([UserRole.User, UserRole.Admin]), postSort);

app.get('*', (req, res) => {
  res.redirect('/');
});
