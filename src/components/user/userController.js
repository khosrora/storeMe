const User = require('./model/user');
const bcrypt = require('bcrypt');


// ! helper
const { createAccessToken } = require('../../helper/token');

exports.register = async (req, res) => {
    const errors = [];
    try {
        // ! get items 
        const { phone, password } = req.body;
        // ! validation
        await User.userValidate(req.body)
        // !find User 
        const user = await User.findOne({ phone });
        if (user) return res.status(400).json({ message: "شماره تماس شما قبلا ثبت شده است" })
        // ! password hashing
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        // ! create user
        await User.create({
            phone, password: hashPassword
        });
        // !send message
        res.status(200).send({ message: "ثبت نام شما با موفقیت به اتمام رسید" })
    } catch (err) {
        errors.push({
            error: err.message
        })
        return res.status(500).json({ message: err.message })
    }
}




exports.login = async (req, res) => {
    try {
        // ! get items
        const { phone, password } = req.body
        // ! validation
        if (!phone || !password)
            return res.status(400).json({ message: "لطفا اطلاعات را کامل وارد کنید" })
        // ! find user 
        const user = await User.findOne({ phone });
        if (!user) return res.status(400).json({ message: "متاسفانه شما ثبت نام نکرده اید" });
        // ! compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "اطلاعات مطابقت ندارد" });
        // ! create jwt
        const token = createAccessToken({ id: user._id });
        res.cookie("userToken", token, {
            httpOnly: true
        })
        // !send message
        res.status(200).json({
            message: "ورود شما موفقیت آمیز بود",
            accessToken: token
        })

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

exports.test = async (req, res) => {
    try {
        const user = req.user;
        console.log(user);
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}