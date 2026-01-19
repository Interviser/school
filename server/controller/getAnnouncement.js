
const noti_model = require("../model/notifications_model");
const nodeCache = require('node-cache');
const cache = new nodeCache({ stdTTL: 300, checkperiod: 320 });


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