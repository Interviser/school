const mongoose = require('mongoose');

const assignmentsShema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    courseName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})
const assignmentsModel = mongoose.model('assignments', assignmentsShema);
module.exports = assignmentsModel;