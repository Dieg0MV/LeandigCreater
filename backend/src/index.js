import express from 'express';
import session from "express-session";
import morgan from 'morgan';
import api from "./routers/api.routes.js";
import log  from "./routers/log.routes.js";
const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json())

app.use(api)
app.use(log)

app.use(morgan('dev'))
app.listen(4000)