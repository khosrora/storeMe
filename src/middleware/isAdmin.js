// isAdmin
exports.isAdmin = (req, res, next) => {
    const user = req.user;
    if (user.isAdmin) {
        next();
    } else {
        return res.status(400).json({ message: "شما مجوز دسترسی را ندارید" })
    }
}