const mongoose = require('mongoose');

const parkingRateSchema = new mongoose.Schema({
    siteId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    },
    charge_2W: {
        type: Number,
        required: true
    },
    charge_4W: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('ParkingRate',parkingRateSchema)