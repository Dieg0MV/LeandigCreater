import { Router } from "express";
import { pool } from "../db.js";
        
const rutas = Router()

rutas.get('/data', async (req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    res.json(result[0])
 })

export default rutas;