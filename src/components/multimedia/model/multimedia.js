const { Schema, model } = require('mongoose');



const multimediaSchema = Schema({
    name: {
        type: String,
        required: true
    },
    format: {
        type: String
    },
    dir: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = model("Multimedia", multimediaSchema)