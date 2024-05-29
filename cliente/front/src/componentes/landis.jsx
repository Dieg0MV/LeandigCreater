import { useState } from "react";

export default function Sheet() {
  const [landis_name, setLandis_name] = useState('')
  const [ page_landi, setPage ] = useState('')

  const submit = async (e)=>{
    e.preventDefault();
    try{
    await fetch('http://localhost:4000/api/maker',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify({landis_name, page_landi})
  }).then((response)=>{
    return response
  })
}catch (err) {
  console.log(err);
}}


  return(
    <div>
      

    </div>
  
  )

  
}