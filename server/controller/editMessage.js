const editMessage = async (req, res) => {
const noti_model = require("../model/notifications_model");
const {cache}= require("../middleware/cacheGetAnnouncements")
    const _id = req.params.id;
   
    const { header, message } = req.body || {}
    if (!header || !message || header.trim() === '' || message.trim() === '') {
        return  res.status(400).json({ message: 'Header and message are required' });
    }
    try {
        const updatedAnnouncement = await noti_model.findByIdAndUpdate(
            { _id: _id },
            { header: header.trim(), message: message.trim() },
            { new: true }
        );
        if (!updatedAnnouncement) {
            return res.status(404).json({ message: 'Announcement not found' });
        }
        res.status(200).json({ message: 'Announcement updated successfully' });
        const announcements = await noti_model.find().sort({ createdAt: -1 }).select('-__v');
        cache.set('announcements', announcements);
    } catch (error) {
        res.status(500).json({ message: 'Error editing announcement'});
    }}

    module.exports = editMessage;