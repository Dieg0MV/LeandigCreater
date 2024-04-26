import { Router } from "express";
import { pool } from "../db.js";        
const rutas = Router()

export default rutas.post('/api/singin', async (req, res) => {
    const {name, password} = req.body;
    const [rows] = await pool.query("INSERT INTO users (name, password) VALUES (?, ?)", [name, password]);
    
    res.send({rows});
 });