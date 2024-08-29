import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";

import { getHomePage, getJobsList } from "./controllers/JobRoleController";
import { dateFilter } from "./filters/dateFilter";
 
const app = express();
 
const env = nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});

app.set('view engine', 'njk');
 
env.addFilter('date', dateFilter);
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
 
app.use(session({ secret: 'SUPER_SECRET', cookie: { maxAge: 28800000 }}));
 
declare module "express-session" {
  interface SessionData {
    token: string;
  }
}
 
app.get('/', getHomePage);
app.get('/job-roles', getJobsList);
 
app.listen(3000, () => {
  console.log('Server started on port 3000');
});