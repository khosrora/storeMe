const { Schema, model } = require('mongoose');


const specsSchema = Schema({
    specs: {
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


module.exports = model("Specs", specsSchema)