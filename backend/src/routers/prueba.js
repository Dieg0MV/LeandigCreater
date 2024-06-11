import { pool } from "../db/db"

const getByid =  (pId)=>{
  return new Promise ((resolve, reject) => {
 pool.query('SELECT * FROM users WHERE id = ?', [pId]) 
  })
}

export default getByid;