const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
    
})

const userModel = mongoose.model("user",userSchema)


module.exports = userModel