const { Schema, model } = require('mongoose');
const { userValidation } = require('./userValidation');



const userSchema = new Schema({
    phone: {
        type: String,
        required: [true, "وارد کردن شماره تماس الزامی است"],
        unique: true
    },
    password: {
        type: String,
        min: 6,
        required: [true, "وارد کردن کلمه عبور الزامی است"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })


userSchema.statics.userValidate = body => {
    return userValidation.validate(body)
}


module.exports = model("User", userSchema);