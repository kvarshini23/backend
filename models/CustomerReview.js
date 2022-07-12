const mongoose = require('mongoose');

const customerReviewSchema = new mongoose.Schema({
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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

module.exports = mongoose.model('CustomerReview',customerReviewSchema)