import express from 'express';
import session from "express-session";
import morgan from 'morgan';
import api from "./routers/api.routes.js";
import log  from "./routers/log.routes.js";
import forms from "./routers/forms.routes.js"
import  cors from "cors";
const app = express();

//configuraciones de la session
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json())
app.use(cors({
	origin:'http://localhost:3000',
	optionsSuccessStatus: 200
}
))
app.use((err, res) => {
	console.error(err.stack);
	res.status(500).send('Algo salió mal!');
  });
  
app.use(morgan('dev'))

//rutas
app.use(forms)
app.use(api)
app.use(log)

app.listen(4000)