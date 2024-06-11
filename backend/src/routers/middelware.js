import jwt from "jwt-simple";
import moment from "moment";

export default checktoken => (req, res, next)=>{
  if (!req.headers['user_token']) {
    return res.json({
      error:'debes incluir el hedear'
    });
  }
  const token = req.headers['user_token'];
  payload = null
  try {
    
  } catch (err) {
    return res.json({
      error:'token invalido'
    })
  }
  if (moment().unix() > payload.expireAt) {
    return res.json({error:'Expired token'});
  
    req.userId = payload.userID;
    next();
  }

}