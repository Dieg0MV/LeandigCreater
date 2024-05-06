import { Router } from "express";
import session  from "express-session";
import {pool} from "../db.js";
const rutas = Router();


 //Login
 export default rutas.post('/api/login', async (req, res) => {
  
   const {name, password} = req.body
   if(name && password){
   const [result] = await pool.query("SELECT * FROM users WHERE name = ? AND password = ? ",[name, password])
      if (result.length > 0){
         req.session.loggedin = true
         req.session.name = name
         res.status(200)
         res.send(true)
         res.redirect("http://localhost:3000/home")

       } else {
         res.status(401).send('Usuario y/o contraseña incorrectos');
       }
     } else {
       res.status(400).send('Faltan credenciales');
     }
   
})
 