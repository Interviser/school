
const noti_model = require("../model/notifications_model");


const getAnnouncement =  async (req, res) => {
    try {
        const announcements = await noti_model.find().sort({ createdAt: -1 }).select('-__v');
        res.status(200).json(announcements);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching announcements', error });
    }
};

module.exports = getAnnouncement;