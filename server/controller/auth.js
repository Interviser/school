
const jwt = require('jsonwebtoken')
require('dotenv').config()

const auth_model = require('../model/signup_model.js');




const verifyToken = (req,res,next)=>{
    try{
        const token = req.headers['authorization'].split(" ")[1]
        console.log('token sent')
        if(!token){
            return res.status(403).json({messagae: 'no token provided'})
        }
         jwt.verify(
            token,
            process.env.JWT_SECRET_KEY,
        (err,decoded)=>{
            if(err){
                return res.status(404).json(err)
            }
            req.id =decoded.id
        })
      
           
        next();
    }
    catch(err){
       return console.log(err)
    }
}




const auth = (verifyToken, async(req,res)=>{
   
   try {
    const user = await auth_model.findOne({id: req.id}).select('-password -__v -_id');
    if(!user){
        return res.status(404).json({message: 'user not found'})
    }
    res.status(200).json(user)
   } catch (err) {
     return console.log(err)
   }


})
module.exports = auth;