const mongoose = require('mongoose');

const student_schema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    middleName:{
        type: String,
        required: false
    },
    lastName:{
        type: String,
        required: true
    },
    emailAddress:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
     class:{
        type:String,
        required: true,
        default: "JHS 3"
    },
     guardianName:{
        type:String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    id:{
        type:String,
        require:true
    }

})

const students_model = mongoose.model('students',student_schema);
module.exports = students_model;