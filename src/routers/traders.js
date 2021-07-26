const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()
const Trader = require('../models/trader.js')


//add new trader
router.post('/traders', async (req, res) => {
    //console.log('Hi')
    const trader = new Trader(req.body)
    try {
        await trader.save()
        const token = await trader.generateAuthToken()
        res.status(201).send({ trader, token})
    } catch (e) {
        //console.log(e)
        if(e.name === "MongoError"){
            console.log('username or already email exists')
        }
        res.status(400).send(e)
    }
})

//login trader
router.post('/traders/login', async (req, res) => {
    try {
        const trader = await Trader.findByCredentials(req.body.username, req.body.password)
        const token = await trader.generateAuthToken()
        res.send({ trader, token})
    } catch (e) {
        //console.log(e)
        if(e){
            console.log("Error logging in")
        }
        res.status(400).send(e)
    }
})

//logout trader
router.post('/traders/logout', auth, async (req, res) => {
    try {
        req.trader.tokens = req.trader.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.trader.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

//logout trader from all terminals
router.post('/traders/logoutAll', auth, async (req, res) => {
    try {
        req.trader.tokens = []
        await req.trader.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

//get trader's profile
router.get('/traders/me', auth, async (req, res) => {
    res.send(req.trader)
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
router.patch('/traders/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = [ 'email', 'username', 'location', 'password']
    const isValidOperation = updates.every((update) =>  allowedUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({ error: 'invalid updates!'})
    }

    try{

        updates.forEach((update) => req.trader[update] = req.body[update])

        //const trader = await Trader.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        await req.trader.save()
        res.send(req.trader)
    } catch (e) {
        res.status(400).send(e)
    }
})

//delete individual trader
router.delete('/traders/me', auth, async (req, res) => {
        
    try{
        await req.trader.remove()
        res.send(req.trader)
    } catch (e) {
        res.status(500).send()
    }

})
module.exports = router