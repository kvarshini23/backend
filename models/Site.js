const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
    name : {
        type: String,
        lowercase: true,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    registrationDate : {
        type: Date,
        default: Date.now(),
    },
    totalGuards : {
        type: Number,
        required : true,
    },
    openTiming : {
        type : String,
        required : true,
    },
    closeTiming :{
        type: String,
        required : true,
    },
    parking_2W : {
        type : Number,
        required: true,
    },
    parking_4W : {
        type: Number,
        required : true,
    },
    totalParking : {
        type : Number,
        required : true,
    },
    available_2WParking : {
        type: Number,
        required:true,
    },
    available_4WParking: {
        type: Number,
        required: true,
    }
    
})

module.exports = mongoose.model('Site',siteSchema);