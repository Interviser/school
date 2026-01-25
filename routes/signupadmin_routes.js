const exress = require('express');
const router = exress.Router();
const verifyToken = require("../middleware/verifyAdminToken")  
const {signupDTOmiddleware}= require("../middleware/dto") 

const signUp_controller = require('../controller/registerAdmin');

router.post('/signupAdmin',verifyToken,signupDTOmiddleware,signUp_controller);
module.exports = router;