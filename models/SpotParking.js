const mongoose = require('mongoose');

const spotParkingBooking = new mongoose.Schema({
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    },
    vehicleType:{
        type: String,
        enum: ['2W','4W'],
        required: true
    },
    vehicleNo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    Amount:{
        type: Number,
        required: true
    },
    slot: {
        start: {
            type: Date,
            required: true
        },
        end: {
            type: Date,
            required: true
        }
    },
    parkingPosition: {
        type: String,
        required: true
    },
    dateOfBooking: {
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model('SpotParkingBooking',spotParkingBooking)