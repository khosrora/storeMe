const User = require('../components/user/model/user');
const jwt = require('jsonwebtoken');


exports.auth = async (req, res, next) => {
    try {

        const token = req.cookies.userToken;
        if (!token) return res.status(400).json("لطفا وارد وب سایت شوید");

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
            if (err) return res.status(500).json({ message: "لطفا وارد وب سایت شوید" });

            // ! find user
            const detailUser = await User.findOne({ _id: user.id });
            
            req.user = detailUser;
            next();
        })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}