export const handleLogin = async (name, contraseña) => {
  await fetch('http://localhost:4000/api/login', {
    method: 'POST',
    mode:"no-cors",
    headers:{
    'Content-Type':'application/json'
    },
    body: JSON.stringify({ name, contraseña })
    })
  };