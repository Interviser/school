const noti_model = require('../model/notifications_model')

const noti = async (req,res)=>{
    try{
     const noti_data = new noti_model(req.body);
    const {header, message}= noti_data;

    if(!header || !message){
      return  res.status(404).json({message: "message and header are required"})
    }
    await noti_data.save();
    res.status(200).json({message: "notification sent successfully"})
    }
    catch(err){
        res.status(500).json({message: "internal server error"})
    }
}
module.exports = noti;