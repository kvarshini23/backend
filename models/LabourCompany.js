const mongoose = require('mongoose');

const labourCompanySchema = new mongoose.Schema({
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Site'
    },
    companyName : {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    GSTNo: {
        type: String,
        required: true,
        minLength: 15,
        maxLength: 15,
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
    personName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10,
    },
    alternateContactNumber: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10,
    }

})

module.exports = mongoose.model('LabourCompany',labourCompanySchema)