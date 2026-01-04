const assignmentsModel = require('../model/assignmentsModel');

// Get the last assignment for a specific course
const getAssignments = async (req, res) => {
    try {
        const { courseName } = req.params;
        const assignment = await assignmentsModel.findOne({ courseName }).sort({ createdAt: -1 }).select('-__v - _id -createdAt');
        if (!assignment) {
            return res.status(404).json({ message: 'No assignments found for this course' });
        }
        res.status(200).json({ assignment });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving assignment', error: error.message });
    }
};

module.exports = getAssignments;