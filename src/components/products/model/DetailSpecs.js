const { Schema, model } = require('mongoose');


const detailsSpecsSchema = Schema({
    specs: {
        type: Schema.Types.ObjectId,
        required: true,
        ref : "Specs"
    },
    name: {
        type: String,
        required: true
    },
    label: {
        type: String
    }
})


module.exports = model("DetailsSpecs", detailsSpecsSchema)