import { Router } from "express";
import session  from "express-session";
import {pool} from "../db.js";
const rutas = Router();


 //Login
 rutas.post('/api/login', async (req, res) => {
  
   const {name, password} = req.body
   if(name && password){
   const [result] = await pool.query("SELECT * FROM users WHERE name = ? AND password = ? ",[name, password])
      if (result.length > 0){
         req.session.loggedin = true; 
         req.session.name = name;
         res.send("Logeado con exito")   
      }
      else {
         res.send('Usuario y/o Contraseña Incorrecta');
      }		     
   }
   })
export default rutas;
 