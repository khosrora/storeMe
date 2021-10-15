const jwt = require('jsonwebtoken');



exports.createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "7d" })
}