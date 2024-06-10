import Router from "express";
import { dbLandis } from "../db/db.js";
const rutas = Router();

export default rutas.post("api/maker", async(req, res) => {
  [landis_name, page_landi] = req.body;
  const [landis] = await dbLandis.query
  ("INSERT INTO landis (landis_name, page_landi) VALUES (?,?)",
  [landis_name, page_landi])
  res.send({landis})
  res.status(404).send(console.log(error))

})