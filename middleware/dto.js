const joi = require('joi');
const signupDTO= joi.object({
   
                firstName: joi.string().min(2).max(30).required(),
                middleName: joi.string().min(2).max(30).optional().allow(''),
                lastName: joi.string().min(2).max(30).required(),
                emailAddress: joi.string().email().required(),
                password: joi.string().min(6).required(),
                guardianName: joi.string().min(2).max(30).required(),
                contact: joi.string().min(10).max(15).required()

})
const signupDTOmiddleware = async(req,res,next)=>{
    try {
        await signupDTO.validateAsync(req.body)
        next()
    } catch (err) {
        return res.status(400).json({msg:'error occurred'})
    }
}
module.exports= {signupDTOmiddleware};