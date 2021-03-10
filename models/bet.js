const mongoose = require("mongoose")
const Schema = mongoose.Schema

const betSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    wager: {
        type: String,
    },
    teams: {
        type: String,
    }
    
})

module.exports = mongoose.model("Bet", betSchema)