const mongoose = require("mongoose");

const login_schema = new mongoose.Schema({
    id:{
        type: String
    },
    password:{
        type: String
    }
})

const login_model = mongoose.model("students", login_schema)

module.exports = login_model;