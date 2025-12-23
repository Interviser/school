const express = require('express');
const router = express.Router();
const connectDb = require('./db_connection');

router.get('/annoucement',async (req,res)=>{
  
 try {
 
  const db = await connectDb();
  const sql = 'select * from annoucement'
  const response = await db.query(sql)
  if(response.length === 0){
   return res.status(200).json({message: "there is no annoucement from the school"})
  }
    res.status(202).json(response)

  
 } catch (err) {
  console.log(err.message)
 }
//  finally{
//   if(db && db.end){
//     db.end((err)=>{
//       if(err){
//         return console.log(err)
//       }
//     })
//   }
//  }
})
module.exports = router;