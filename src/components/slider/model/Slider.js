const { Schema, model } = require('mongoose');


const sliderSchema = Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: Schema.Types.ObjectId,
        ref: "Multimedia",
        required: true
    },
    isShow: {
        type: Boolean,
        default: false
    }
})


module.exports = model("Slider", sliderSchema)