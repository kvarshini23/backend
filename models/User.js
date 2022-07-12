const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phNo: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10,
    },
    verifyPhNo: {
        type: Boolean,
        default: false,
    },
    email: {
        type: String,
        trim : true,
        validate: [validateEmail, "Please fill a valid email address"],
        match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
        ],
    },
    verifyEmail: {
        type: Boolean,
        default: false,
    },
    MPIN : {
        type: String
    },
    rewards: {
        type: Number,
        default: 0
    },
    status: {
        type : String,
        enum : ['Mute', 'Resume']
    }
})

module.exports = mongoose.model('User',userSchema)
