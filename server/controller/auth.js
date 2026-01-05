
const jwt = require('jsonwebtoken')
require('dotenv').config()

const auth_model = require('../model/signup_model.js');



const auth = (async(req,res)=>{
 
   try {
    const user = await auth_model.findOne({id: req.id}).select('-password -__v -_id');
    if(!user){
        console.log(req.id)
        return res.status(404).json({message: 'user not found', id: req.id})
    }
    res.status(200).json("successfully authenticated")
   } catch (err) {
     return res.status(500).json({message: 'internal server error'})
   }


})
module.exports = auth;