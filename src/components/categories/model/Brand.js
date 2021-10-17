const { Schema, model } = require('mongoose');
const { brandValidation } = require("./brandValidation")


const brandSchema = Schema({
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }],
    image: {
        type: String,
        required: true
    }
})

brandSchema.statics.brandValidate = body => {
    return brandValidation.validate(body)
}

module.exports = model("Brand", brandSchema)