const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
    },chat:{
        type: String,
        default: "chat with "
    },
    tokens: [
        { token: { type: String, required: true } }
    ]
})

traderSchema.virtual('orders', {
    ref: 'Order',
    localField: '_id',
    foreignField: 'trader'
})

// hide some data (password & tokens)
traderSchema.methods.toJSON = function () {
    const trader = this
    const traderObject = trader.toObject()

    delete traderObject.password
    delete traderObject.tokens

    return traderObject
}

//generate Auth Token
traderSchema.methods.generateAuthToken = async function () {
    const trader = this
    const token = jwt.sign({ _id: trader._id.toString() }, 'theraininspain')

    trader.tokens = trader.tokens.concat({ token })
    await trader.save()
    return token
}


// login trader
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