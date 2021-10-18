const { Schema, model } = require('mongoose');


const bannerSchema = Schema({
    image: {
        type: Schema.Types.ObjectId,
        ref: "Multimedia",
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    isShow: {
        type: Boolean,
        default: false
    }
})


module.exports = model("Banner", bannerSchema)