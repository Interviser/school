const assignmentController = require('../controller/assignments');
const express = require('express');
const router = express.Router(); 
const verityToken = require('../middleware/verifyAdminToken');

// Route to create a new assignment

router.post('/assignments', verityToken, assignmentController);
module.exports = router;