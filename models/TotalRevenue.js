const mongoose = require('mongoose');

const totalRevenueSchema = new mongoose.Schema({
    siteId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Site'
    },
    price_2W : {
        type: Number,
        required: true
    },
    price_4W: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('TotalRevenue',totalRevenueSchema)