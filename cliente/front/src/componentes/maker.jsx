import "./style/maker.css"
import { useState } from "react";

export default function (){
  const [fileName, setLandis_name] = useState('')
  const [ data, setPage ] = useState('')
 
  const submit = async (e)=>{
    e.preventDefault();
    try{
    await fetch('http://localhost:4000/api/maker',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify({fileName, data})
  })
  }catch(err){ console.log("error --> ", err)}
}


  return(
    <div className="cont">
   <header className="top"> 

   </header>
    

    <div className="drag" >
      
      </div>


      <div className="drop">

        <div className="filexml">
        <input type="file" id="file-selector" multiple></input>
        

        </div>
      
      </div>
    
    </div>


  );
 


}