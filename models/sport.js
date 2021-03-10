const mongoose = require("mongoose")
const Schema = mongoose.Schema

const sportSchema = new Schema({
    sports: {
        type: String,
        required: true
    },
    basketBall: {
        type: String,
    },
    football: {
        type: String,
    },
    baseball: {
        type: String,
    },
    soccer: {
        type: String,
    },

})
module.exports = mongoose.model("Sport", sportSchema)