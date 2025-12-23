const bcrypt = require('bcrypt');
const saltRounds = 14;

const students_model = require('../model/signup_model');

const signUp_controller = async (req,res)=>{
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
       studentsData.id = id;
       const hashedPassword = await bcrypt.hash(password,saltRounds);
       studentsData.password = hashedPassword;

       
       const savedData = await studentsData.save();
       res.status(200).json("signed up successfully");
    }
    catch(err){
        res.status(500).json("internal server error")
    }
}

module.exports = signUp_controller;
