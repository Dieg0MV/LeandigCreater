import dotenv from 'dotenv'
dotenv.config({path:'C:/Users/Diego/Desktop/RESPALDO DIEGO/Escritorio/xp/why_not/backend/src/.env'})

import express from 'express';
import session from "express-session";
import morgan from 'morgan';
import log  from "./routers/log.routes.js";
import forms from "./routers/forms.routes.js"
import save from "./routers/save.routes.js";
import lans from "./routers/createlans.js";
import cors from "cors";


const app = express();

//configuraciones de la session
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


app.use(express.json());
app.use(cors({
	origin:'*',
	methods: ['GET', 'POST']
}));

//manejo de errores

app.use((err, res, req, next) => {
	console.error(err.stack);
	res.status(500).send('Algo salió mal!', err);
});
app.use(morgan('dev'));

//rutas
app.use(lans)
app.use(save);
app.use(forms);
app.use(log);

app.listen(4000);