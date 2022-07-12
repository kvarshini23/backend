const mongoose= require('mongoose');

const paymentClosingSchema = new mongoose.Schema({
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    },
    guardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guard'
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('PaymentClosing',paymentClosingSchema)