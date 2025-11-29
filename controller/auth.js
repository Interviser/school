const express = require('express')
const connectDb = require('./db_connection')
const router = express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config()
// const verifyData = require('./verification')
// const verifyToken = verifyData()




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
                return res.status(404).json(err)
            }
            req.id =decoded.id
        })
      
           
        next();
    }
    catch(err){
       return console.log(err)
    }
}




router.get('/home',verifyToken, async(req,res)=>{
   
   try {
    const db = await connectDb()
    const sql = 'SELECT * FROM student_info WHERE id = ?'

    const [row] = await db.query(sql, req.id)
    if(row.length === 0){
        return res.status(404).json({message: 'something went wrong'})
    }
    res.status(201).json({
        user: row[0].id, 
        'first name': row[0].First_name,
        "last name": row[0].Last_name})
   } catch (err) {
     return console.log(err)
   }
//    finally{
//     if(db && db.end){
//         db.end((err)=>{
//             if(err){
//                 return console.log(err)
//             }
//         })
//     }
//    }

})
module.exports = router;