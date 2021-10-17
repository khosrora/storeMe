const { Schema, model } = require('mongoose');


const surveySchema = Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    label: {
        type: String
    }
})


module.exports = model("Survey", surveySchema)