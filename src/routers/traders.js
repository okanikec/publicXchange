const express = require('express')
const router = new express.Router()
const Trader = require('../models/trader.js')


//add new trader
router.post('/traders', async (req, res) => {
    console.log('Hi')
    const trader = new Trader(req.body)
    try {
        await trader.save()
        res.status(201).send(trader)
    } catch (e) {
        console.log(e)
        if(e.name === "MongoError"){
            console.log('email exists')
        }
        res.status(400).send(e)
    }
})

//login trader
router.post('/traders/login', async (req, res) => {
    try {
        const trader = await Trader.findByCredentials(req.body.username, req.body.password)
        res.send(trader)
    } catch (e) {
        res.status(400).send(e)
    }
})

//get all traders
router.get('/traders', async (req, res) => {
    console.log('Hello')
    try {
        const traders = await Trader.find({})
        res.send(traders)
    } catch (e) {
        res.status(500).send()
    }
})


//get individual trader 
router.get('/traders/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const trader = await Trader.findById(_id)
        if(!trader){
            return res.status(404).send()
        }
        res.send(trader)
    } catch (e) {
        res.status(500).send()
    }    
})

//update individual trader
router.patch('/traders/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = [ 'email', 'username', 'location', 'password']
    const isValidOperation = updates.every((update) =>  allowedUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({ error: 'invalid updates!'})
    }

    try{
        const trader = await Trader.findById(req.params.id)

        updates.forEach((update) => trader[update] = req.body[update])

        //const trader = await Trader.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

        if(!trader){
            return res.status(404).send()
        }
        res.send(trader)
    } catch (e) {
        res.status(400).send(e)
    }
})

//delete individual trader
router.delete('/traders/:id', async (req, res) => {
        
    try{
        const trader = await Trader.findByIdAndDelete(req.params.id)
        
        if(!trader){
            return res.status(404).send()
        }
        res.send(trader)
    } catch (e) {
        res.status(500).send()
    }

})
module.exports = router