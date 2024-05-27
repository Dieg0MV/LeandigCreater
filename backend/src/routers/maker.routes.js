import * as fs from "node:fs/promises";
import Router from "express";
import { dbLandis } from "../db.js";
rutas = Router()
export default rutas.post ("api/maker", async(req, res) => { 
  [landis_name, page] = req.body
  const landis = dbLandis.query("INSERT INTO landis ( landis_name, page) VALUES (?,?)",[landis_name, page])
  res.send(landis)

})