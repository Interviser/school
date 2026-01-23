const logOut = (req, res) => {
    res.clearCookie('token');
    res.redirect("/login.html")
}

module.exports = { logOut };