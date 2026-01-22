
const noti_model = require("../model/notifications_model");
const { cache } = require('../middleware/cacheGetAnnouncements');


const getAnnouncement =  async (req, res) => {
    try {
        const announcements = await noti_model.find().sort({ createdAt: -1 }).select('-__v');
        cache.set('announcements', announcements);
        res.status(200).json(announcements);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching announcements', error });
    }
};

module.exports = getAnnouncement;