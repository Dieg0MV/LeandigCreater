import { Router } from "express";
import {pool} from "../db.js";
const rutas = Router();

rutas.get('/api/login', (req, res) => {
    res.send("hola")
 });
 
 // entrada de datos
 rutas.post('/api/singin', async (req, res) => {
    const {name, password} = req.body
    const [rows] = await pool.query("INSERT INTO users (name, password) VALUES (?, ?)", [name, password])
    
    res.send({rows})
 });
 
 //Login
 rutas.post('/api/log', async (req, res) => {
    const {name, password} = req.body
    if (name && password){
        await pool.query("SELECT * FROM users WHERE name = ? AND password = ? ",[name, password], (res, err)=>{


        }); 
    }
 });

 //para actualizaciones
 rutas.put('/api/login', (req, res) => {
    res.send('actualizando mundo')
 });

export default rutas;
 