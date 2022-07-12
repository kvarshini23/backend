const mongoose = require('mongoose');

const spotCustomerReview = new mongoose.Schema({
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    },
    guardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guard'
    },
    name:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    vehicleType:{
        type: String,
        enum : ['2W','4W'],
        required: true
    },
    review: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('SpotCustomerReview',spotCustomerReview)