const express = require('express')
const router = new express.Router()
const Trader = require('../models/trader.js')


//add new trader
router.post('/traders', (req, res) => {
    console.log('Hi')
    const trader = new Trader(req.body)
    trader.save().then(()=> {
        res.status(201).send(trader)
    }).catch((e)=>{
        //res.status(400).send(e.errors.password.message)
        res.status(400).send(e)
    })
})

//get all traders
router.get('/traders', (req, res) => {
    console.log('Hello')
    Trader.find({ }).then((traders) => {
        res.send(traders)
    }).catch((e) => {
        res.status(500).send(e)
    })
})


router.get('/traders/:id', (req, res) => {
    const_id = req.params.id
    Trader.findById().then((trader) => {
        if(!trader) {
            return res.status(404).send()
        }
        res.send(trader)
    }).catch((e)=>{
        res.status(500).send()
    })
})

module.exports = router