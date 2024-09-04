import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";

import { getJobsList } from "./controllers/JobRoleController";
import { dateFilter } from "./filters/dateFilter";
import { getHomePage } from "./controllers/HomePageController";
import { getLoginForm, postLoginForm, logoutForm} from "./controllers/AuthController";
import { checkLoginStatus } from "./middleware/AuthStatus";
import { allowRoles } from "./middleware/AuthMiddleware";
import { UserRole } from "./models/JwtToken";

const app = express();

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
 
app.use(session({ secret: 'SUPER_SECRET', cookie: { maxAge: 28800000 }}));

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.locals.isLoggedIn = checkLoginStatus(req);
  next();
});
 
declare module "express-session" {
  interface SessionData {
    token: string;
  }
}
 
app.get('/job-roles', allowRoles([UserRole.Admin, UserRole.User]), getJobsList);
 
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get('/', getHomePage);
app.get('/loginForm', getLoginForm);
app.post('/loginForm', postLoginForm);
app.post('/logout',  allowRoles([UserRole.Admin, UserRole.User]), logoutForm );

