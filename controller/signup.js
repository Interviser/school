 const bcrypt = require('bcrypt');
require('dotenv').config();
const sanitize = require('mongo-sanitize');
const students_model = require('../model/signup_model');

const signUp_controller =  async (req,res) =>{
      const studentsData = new students_model(sanitize(req.body))
        const {firstName, lastName,emailAddress,password, guardianName, contact} = studentsData;
        if(!firstName || !lastName || !emailAddress || !password || !guardianName || !contact){
            return res.status(400).json("all fields are required")
        }
       
    try{
       const emailExists = await students_model.findOne({emailAddress:emailAddress});
         if(emailExists){
        return res.status(400).json("email already exists")
       }
       
       if(password.length < 6){
        return res.status(400).json("password must be at least 6 characters")
       }
       const bool =sanitize(false);
       const no_of_records = await students_model.countDocuments({"admin":bool});
       const generated_id = `CCIS/26/${no_of_records+1}`;
       studentsData.id = generated_id;
       const hashedPassword = await bcrypt.hash(password,12);
       studentsData.password = hashedPassword;
      await studentsData.save();
       res.status(200).json("signed up successfully");
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = signUp_controller;
