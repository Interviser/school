const noti_model = require('../model/notifications_model');
const deleteAnnouncement = async (req, res) => {
    const id = req.params.id;
    if (!id.trim()) {
        return res.status(400).json({ message: "Announcement ID is required" });
    }
    try {
        const deletedAnnouncement = await noti_model.findByIdAndDelete(id);
        if (deletedAnnouncement) {
            return res.status(200).json({ message: "Announcement deleted successfully" });
        } else {
            return res.status(404).json({ message: "Announcement not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error deleting announcement", error });
    }
}

module.exports = deleteAnnouncement;