import {writeFile} from "node:fs/promises";
import Router from "express";
const rutas = Router();

export default rutas.post ("/api/createlans",async (req, res) => {
  try {
    const {fileName, data} = req.body
    await writeFile(fileName, data);
    console.log("Wrote data to ",fileName);
    res.sendFile(fileName) 

  } catch (err) {
      console.log("Got an error trying to write the file: ", err);
    }
  
});