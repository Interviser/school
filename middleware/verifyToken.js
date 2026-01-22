const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = (req,res,next)=>{
   

        const token = req.cookies.token
        if(!token){
            return res.status(403).json({message: 'no token provided'})
        }
    try{
         jwt.verify(
            token,
            process.env.JWT_SECRET_KEY,
        (err,decoded)=>{
            if(err){
                return res.status(401).json("invalid token")
            }
            req.id =decoded.id
            next();
        })
      
           
        }    catch(err){
      return res.status(500).json({message:  err})
    }
}

module.exports = verifyToken;