const assignmentsModel= require('../model/assignmentsModel');

// Create a new assignment
const createAssignment = async (req, res) => {
    try {
        const { title, description, dueDate, courseName } = req.body;
        const newAssignment = new assignmentsModel({
            title,
            description,
            dueDate,
            courseName
        });
        await newAssignment.save();
        res.status(201).json({ message: 'Assignment created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating assignment', error: error.message });
    }
};



module.exports =  createAssignment;