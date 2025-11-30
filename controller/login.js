const login_model = require('../model/signup_model.js');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');



const login_controller = async(req,res)=>{
    try {
       const student = login_model(req.body)
            const id = student.id;
            if(!id){
                return res.status(400).json({message: "id is required"})
            }
            const idExist = await login_model.findOne({id:id});
            

            if(!idExist){
               return res.status(404).json({message: "id does not exist in our records"})
            }
            const password = idExist.password;
            const confirmpassword = await bcrypt.compare(student.password, password)

            if(!confirmpassword){
                return res.status(400).json({message:"password doesn't match"})
            }

        
    
        const token = jwt.sign(
            {id: id},
            process.env.JWT_SECRET_KEY,
            {expiresIn: '3hr'}
        )
        res.status(200).json({token: token})}

    catch (err) {
        return res.status(500).json(err.message)
    } 
    
}

module.exports = login_controller;
