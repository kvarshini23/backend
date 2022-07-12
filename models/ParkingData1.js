const mongoose = require('mongoose');

const parkingData1 = new mongoose.Schema({
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    },
    prebookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PrebookingParking'
    },
    checkin: {
        type: Date,
        default: Date.now()
    },
    checkout:{
        type: Date
    },
    paymentStatus: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('ParkingData1',parkingData1)