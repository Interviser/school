const bcrypt = require('bcrypt');
const changePassword = async (req, res) => {
    const { userId, oldPassword, newPassword } = req.body;

    if (!userId || !oldPassword || !newPassword) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const students_model = require('../model/signup_model');
        const user = await students_model.findOne({ id: userId });
    
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Old password is incorrect" });
        }  

        if (newPassword.length < 6) {
            return res.status(400).json({ message: "New password must be at least 6 characters long" });
        }
        const hashedNewPassword = await bcrypt.hash(newPassword, 14);
        user.password = hashedNewPassword;
        await user.save();
        res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = changePassword;