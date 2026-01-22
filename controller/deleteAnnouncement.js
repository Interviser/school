const noti_model = require('../model/notifications_model');
const {cache} = require('../middleware/cacheGetAnnouncements');
const sanitize = require('mongo-sanitize');
const deleteAnnouncement = async (req, res) => {
    const id = sanitize(req.params._id);
    if (!id) {
        console.log(id)
        return res.status(400).json({ message: "Announcement ID is required" });
    }
    try {
        const deletedAnnouncement = await noti_model.findByIdAndDelete(id);
        if (deletedAnnouncement) {
            const announcements = await noti_model.find().sort({ createdAt: -1 }).select('-__v');
            cache.set('announcements', announcements);
            return res.status(200).json({ message: "Announcement deleted successfully" }); 
            
        } else {
            return res.status(404).json({ message: "Announcement not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error deleting announcement", error });
    }
}

module.exports = deleteAnnouncement;