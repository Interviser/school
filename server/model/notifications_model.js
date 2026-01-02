const mongoose = require('mongoose')

const noti_schema = new mongoose.Schema({
    header:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now()
    },
    id:{
        type:Number,
        required:true,
        unique:true
    }
})

const noti_model = mongoose.model("notifications", noti_schema);

module.exports = noti_model;