const mongoose = require('mongoose');

const guardSchema = new mongoose.Schema({
    labourCompanyId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LabourCompany'
    },
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim : true,
        validate: [validateEmail, "Please fill a valid email address"],
        match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
        ],
        required: true,
    },
    phNo: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10,
    },
    alternatePhNo: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10,
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type : String,
        enum : ['Mute', 'Resume']
    },
    timing: {
        start: {
            type:String,
            required: true
        },
        end: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model('Guard',guardSchema)