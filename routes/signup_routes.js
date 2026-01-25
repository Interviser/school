const exress = require('express');
const router = exress.Router();
const verifyToken = require("../middleware/verifyAdminToken")
const {signupDTOmiddleware} = require("../middleware/dto")

const signUp_controller = require('../controller/signup');

router.post('/signup',verifyToken,signupDTOmiddleware,signUp_controller);
module.exports = router;