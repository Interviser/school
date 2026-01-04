const express = require('express');
const router = express.Router();
const assignmentController = require('../controller/getAssignments');
const verifyToken = require('../middleware/verifyToken');

// Route to get the last assignment for a specific course
router.get('/assignments/:courseName', verifyToken, assignmentController);

module.exports = router;