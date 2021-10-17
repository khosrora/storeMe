const { Schema, model } = require('mongoose');


const warrantySchema = Schema({
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})


module.exports = model("Warranty", warrantySchema)