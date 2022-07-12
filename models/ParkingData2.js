const mongoose = require('mongoose');

const parkingData2 = new mongoose.Schema({
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    },
    prebookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SpotParkingBooking'
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

module.exports = mongoose.model('ParkingData2',parkingData2)