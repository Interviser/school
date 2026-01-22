
 const sanitize = require('mongo-sanitize');
const auth_model = require('../model/signup_model.js');


const auth = (async(req,res)=>{
  const userId = sanitize(req.id);
 
   try {
    const user = await auth_model.findOne({id: userId}).select('-password -__v -_id');
    if(!user){
        return res.status(404).json({message: 'user not found'})
    }
    res.status(200).json(user)
   } catch (err) {
     return res.status(500).json({message: 'internal server error'})
   }


})
module.exports = auth;