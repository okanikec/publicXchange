const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    currencyby: {
        type: String,
        required: true,
        trim: true
    },
    dollarneed: {
        type: Number,
        required: true,
        trim: true
    },currencyofa: {
        type: String,
        required: true,
        trim: true
    },
    needate: {
        type: Date,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    trader: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Trader'
    }
})

const Order = mongoose.model('Order', orderSchema )

module.exports = Order