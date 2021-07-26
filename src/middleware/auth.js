const jwt = require('jsonwebtoken')
const Trader = require('../models/trader')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'theraininspain')
        const trader = await Trader.findOne({_id: decoded._id, 'tokens.token': token})

        if(!trader) {
            throw new Error()
        }

        req.token = token
        req.trader = trader
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate' })
    }
}

module.exports = auth