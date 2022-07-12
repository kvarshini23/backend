const mongoose = require('mongoose');

const mallOwnerSchema = new mongoose.Schema({
    
    siteIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    }],
    name: {
        type: String,
        required:true
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
    }

})

module.exports = mongoose.model('MallOwner',mallOwnerSchema)