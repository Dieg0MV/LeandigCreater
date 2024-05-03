import { useState } from "react";
import { handleLogin } from "../apis/conexiones.js";
//import { useForm } from "react-hook-form";


export default function Log(){
  
  const [name, setName] = useState('')
  const [psw, setPsw] = useState('')
 
  handleLogin(name, psw)

return(
    <div>
        <h1>Login</h1>
        <form method="POST">
            <input 
            value={name}
            type="name" 
            placeholder="Usuario"
            onChange={(e) => setName(e.target.value)} 
            />

            <input 
            type="password"
            placeholder="Contraseña"
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
            required/>

            <button>send</button>
        </form>        
    </div>
)}

