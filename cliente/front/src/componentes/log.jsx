import { handleLogin } from "../apis/conexiones.js";
import { useForm } from "react-hook-form";

export default function Login(){
  const {
    register, 
    handleSubmit, 
    formState: {errors}} 
    = useForm(
        

    )
  const onSubmit= (data, e) => console.log(data, e)
  const onError= (errors, e) => console.log(errors, e)
  useForm({defaultValues:{
    name:"",
    password:""
  }})
  
 

return(
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit, onError)} method="POST">
            <input 
            {...register("name", {required:"Ingresa un usuario"})} 
            type="text" 
            placeholder="Usuario" 
            />

            <input 
            type="password"
            {...register("password", {require:"ingresa tu contraseñ"})} 
            placeholder="Contraseña" 
            
            required/>

            <button> send</button>
        </form>        
    </div>
)}

