const path = require("path");
const serverAdminPage = (req, res) => {
    const cookie = req.cookies.token;
    if (!cookie) {
        return res.redirect('/login.html');
    }
    res.sendFile(path.join(__dirname, "..","private", 'admin.html'));
};

module.exports = serverAdminPage;