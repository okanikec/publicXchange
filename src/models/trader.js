const mongoose = require('mongoose')
const validator = require('validator')

const Trader = mongoose.model('Trader', {
    email: {
        type: String,
        required: true,
        trim: true
    }, username: {
        type: String,
        trim: true
    },   
    location: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate(value){
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain Password')
            }
        }
    },
    currency:{
        type: Number,
        trim: true
    }
})

module.exports = Trader