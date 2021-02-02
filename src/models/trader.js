const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const traderSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        
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

//
traderSchema.statics.findByCredentials = async (username, password) => {
    const trader = await Trader.findOne({username})

    if (!trader) {
        throw new  Error ('unable to login')
    }

    const isMatch = await bcrypt.compare(password, trader.password)

    if(!isMatch) {
        throw new Error('unable to login')
    }

    return trader
}

//hash plain text passwords before saving
traderSchema.pre('save', async function (next) {
    const trader = this
    
    if (trader.isModified('password')) {
        trader.password = await bcrypt.hash(trader.password, 8)
    }

    next()
})

const Trader = mongoose.model('Trader', traderSchema )

module.exports = Trader