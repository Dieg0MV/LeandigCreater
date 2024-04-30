import { Router } from "express";
import {dbforms} from "../db.js";
const rutas = Router();


rutas.post('/api/forms',async(req, res)=>{
    const {names, lasthnames, email, phonenum} = req.body;
    const [rows] = await dbforms.query("INSERT INTO forms (names, lasthnames, email, phonenum) VALUES (?, ?, ?, ?)", [names, lasthnames, email, phonenum]);
    res.send({rows})
});

export default rutas;