import { useState } from "react";
import Home from "./home";
export default function Log(){
  const [name, setName] = useState('')
  const [password , setPassword ] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
          
        body: JSON.stringify({name, password})
      }).then(response => {
        if (!response.ok) {
          console.log(response)
          throw new Error('Inicio de sesión fallido');
        }
        return <Home/>;
      })
    } catch (err) {
      console.log(err);
    }
  };
      
return(
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} method="POST">
            <input 
            value={name}
            type="name" 
            placeholder="Usuario"
            onChange={(e) => setName(e.target.value)} 
            />

            <input 
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword (e.target.value)}
            required/>

            <button type="submit">send</button>
        </form>        
    </div>
)}

