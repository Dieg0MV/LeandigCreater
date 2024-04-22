import express from 'express';
import morgan from 'morgan';
import api from "./routers/api.routes.js";
import log  from "./routers/index.routes.js";

const app = express();
app.use(express.json())

app.use("/Test", api)
app.use(log)

app.use(morgan('dev'))
app.listen(4000)