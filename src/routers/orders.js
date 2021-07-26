const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()
const Order = require('../models/order.js')

//create order
router.post('/orders', auth , async (req, res) => {
    //console.log(req.body)
    //const order = new Order(req.body)
    const order = new Order({
        ...req.body,
        trader: req.trader._id
    })

    try {
        await order.save()
        res.status(201).send(order)
    } catch (e) {
        res.status(400).send(e)
    }
    
})

//get all orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find({})
        res.send(orders)
    } catch {
        res.status(500).send()
    }
        
})

//get individual order
router.get('/orders/:id', async (req,res) => {
    const _id = req.params.id
    try {
        const order = await Order.findById(_id)

        if (!order) {
            return res.status(404).send()
        }    
        res.send(task)
    } catch {
        res.status(500).send()
    }
    
})

router.patch('/orders/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['currencyby', 'dollarneed', 'currencyofa', 'needate', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const order = await Order.findById(req.params.id)

        updates.forEach((update) => order[update] = req.body[update])
        await order.save()

        if (!order) {
            return res.status(404).send()
        }

        res.send(order)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id)

        if (!order) {
            res.status(404).send()
        }

        res.send(order)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router