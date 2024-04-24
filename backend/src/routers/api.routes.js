import { Router } from "express";
import { pool } from "../db.js";
        
const rutas = Router()

rutas.get('/data', async (req, res) => {
    const {name,password} = req.body
    const [result] = await pool.query("SELECT * FROM users WHERE name = ? AND password = ? ", [name, password])
    res.json(result)

 })

export default rutas;