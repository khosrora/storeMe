const { Schema, model } = require('mongoose');


const sellerSchema = Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    label: {
        type: String
    }
})


module.exports = model("Seller", sellerSchema)