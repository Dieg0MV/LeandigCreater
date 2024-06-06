import {writeFile} from "node:fs/promises";
import Router from "express";
const rutas = Router();

export default rutas.post ("/api/createlans",async (req, res) => {
  try {
    const {fileName, data} = req.body
    await writeFile(fileName, data);

    const jsondata = {'filename':fileName};
    console.log("Wrote data to ",fileName);
    res.json(jsondata)

  } catch (err) {
      console.log("Got an error trying to write the file: ", err);
    } 
});