const { Schema, model } = require('mongoose');
const { categoriesValidation } = require("./categoriesValidation")


const categorySchema = Schema({
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    image: {
        type: Schema.Types.ObjectId,
        ref: "Multimedia",
    }

})


categorySchema.statics.categoriesValidate = body => {
    return categoriesValidation.validate(body)
}

module.exports = model("Category", categorySchema)