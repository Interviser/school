const bcrypt = require('bcrypt');

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
                return res.status(404).json("cannot verify")
            }
            req.id =decoded.id
        })
      
           
        next();
    }
    catch(err){
       return console.log("an error occurred")
    }
}


const students_model = require('../model/signup_model');

const signUpadmin_controller = (verifyToken, async (req,res)=>{
    try{
        const studentsData = new students_model(req.body)
        const {firstName, lastName,emailAddress,password, guardianName, contact} = studentsData;
        if(!firstName || !lastName || !emailAddress || !password || !guardianName || !contact){
            return res.status(400).json("all fields are required")
        }

       const emailExists = await students_model.findOne({emailAddress:emailAddress});

        if(emailExists){
        return res.status(400).json("email already exists")
       }
       
       if(password.length < 6){
        return res.status(400).json("password must be at least 6 characters")
       }
       const no_of_records = await students_model.countDocuments();
       const id = `CCIS/26/${no_of_records+1}`;
       const role = true
       studentsData.id = id;
       studentsData.admin = role;
       const hashedPassword = await bcrypt.hash(password,14);
       studentsData.password = hashedPassword;

       
        await studentsData.save();
       res.status(200).json("signed up successfully");
    }
    catch(err){
        res.status(500).json("internal server error")
    }
})

module.exports = signUpadmin_controller;
