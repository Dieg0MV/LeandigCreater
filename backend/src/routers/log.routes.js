
import { Router } from "express";
import  jwt  from "jwt-simple";
import  moment  from "moment";
import {pool} from "../db/db.js";

const rutas = Router();


 //Login
 export default rutas.post('/api/login', async (req, res) => {
  const creatToken = (user)=>{
    var payload ={
      userID:user.id,
      createdAt: moment().unix(),
      expireAt: moment().add(1, 'day').unix()
    }
    return jwt.encode(payload, process.env.TOKEN_KEY)
  }


  const {name, password} = req.body
  if(name && password){
  const [result] = await pool.query("SELECT * FROM users WHERE name = ? AND password = ? ",[name, password])
    if (result.length > 0){
        res.json({
          succesfull:creatToken(result),
          done:'logeado correctamente'
        })
      

      }else {
        res.status(401).send('Usuario y/o contraseña incorrectos');
      }
     }else {
      res.status(400).send('Faltan credenciales'); 
    }   

    
})
 