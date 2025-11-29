const login_model = require('../model/login_model');
const bcrypt = require('bcrypt')

const router = express.Router()


router.post('/login', async(req,res)=>{
    try {
       const student = login_model(req.body)
            const id = student.id;
            const idExist = await login_model.findOne(id)
            

            if(!idExist){
               return res.status(404).json({message: "id does not exist in our records"})
            }
            const password = idExist.password;
            const confirmpassword = bcrypt.compare(student.password, password)

            if(!confirmpassword){
                return res.status(400).json({message:"password doesn't match"})
            }

        
    
        const token = jwt.sign(
            {id: id},
            process.env.JWT_SECRET_KEY,
            {expiresIn: '3hr'}
        )
        res.status(202).json({token: token})}

    catch (err) {
        return res.status(500).json(err.message)
    } 
    
})

module.exports = router;
