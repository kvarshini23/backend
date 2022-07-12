const mongoose = require('mongoose');

const advertisement = new mongoose.Schema({
    imageType: {
        type: String,
        enum : ['mobile','desktop']
    },
    path:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Advertisement',advertisement)