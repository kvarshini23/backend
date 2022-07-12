const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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
    verifySelfVehicle: {
        type: Boolean,
        default: true,
    },
    driverName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10,
    }
})

module.exports = mongoose.model('Vehicle',vehicleSchema)