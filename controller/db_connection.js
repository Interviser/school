const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI =process.env.MONGO_URI || "mongodb://localhost:27017/SMS";

const connectDB = async () => {
    try{
      const connection =  await mongoose.connect(MONGO_URI);
        if(connection){
           return console.log("MongoDB is connected");
        }
        console.log("MongoDB connection failed");
        
    }
    catch(err){
        console.error("Database connection failed", err);
        process.exit(1)
    }
}
connectDB();
