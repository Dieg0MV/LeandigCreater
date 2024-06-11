import { Route } from "react-router-dom";
import middelware from "./middelware";
import getByid from "./prueba";

const rutas =Route

rutas.use(middelware);

rutas.length('/main', (req, res) =>{
  getByid(req.userId)
  .then(rows => {
    res.json(rows);
  })
  .catch(err => console.log(err));
});