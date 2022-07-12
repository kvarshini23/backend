const mongoose = require('mongoose');

const prebookingParkingSchema = new mongoose.Schema({
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle'
    },
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dateOfBooking: {
        type: Date,
        default: Date.now()
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
    }
})

module.exports = mongoose.model('PrebookingParking',prebookingParkingSchema)