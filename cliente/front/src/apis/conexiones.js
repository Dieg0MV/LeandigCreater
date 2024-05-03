export const handleLogin = async (Credential) => {
  await fetch('http://localhost:4000/api/login', {
    method: 'POST',
    mode:"no-cors",
    headers:{
    'Content-Type':'application/json'
    },
    body: JSON.stringify(Credential)
    }).then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err))
  };

  e.preventDefault();
   handleLogin(objetos);
    console.log(objetos.name, objetos.pasword)