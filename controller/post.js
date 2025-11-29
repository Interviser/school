const express = require('express')

const router = express.Router();

const connectDb= require('./db_connection');

router.post('/',async(req, res)=>{
    const {title, msg} = req.body
    const db = await connectDb();
   try {
      
        if(!title || !msg){
           return res.status(404).json({message: 'everyfield need to filled'})
        }
        const sql = 'insert into annoucement (heading, message) values (?,?)'

        await db.query(sql,[title, msg])
           
            res.status(201).json('successfully done!!!')
        

   } catch (err) {
    console.log(err.message)
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

module.exports = router

/*  const title = req.body.title;
    const msg = req.body.msg;

    if(!title || !msg){
        
    }
   
    }) */