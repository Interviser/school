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
            const idExist = await login_model.findOne({id:id})
            

            if(!idExist){
               return res.status(404).json({message: "id does not exist in our records"})
            }
            const password = idExist.password;
            const firstName = idExist.firstName;
            const role = idExist.admin;
            const confirmpassword = await bcrypt.compare(student.password, password)

            if(!confirmpassword){
                return res.status(400).json({message:"password doesn't match"})
            }

        
    
        const token = jwt.sign(
            {id: id ,
            firstName: firstName,
            role: role
            },
            process.env.JWT_SECRET_KEY,
            {expiresIn: '3hr'}
        )
       // res.status(200).json({token: token})
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 3 * 60 * 60 * 1000 
        }).status(200).json({message: "login successful"});
    }

    catch (err) {
        return res.status(500).json(err.message)
    } 
    
}

module.exports = login_controller;
