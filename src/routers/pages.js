const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
    res.render('index', {
        name: 'Ikechukwu Okanu'
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        name: 'Ikechukwu Okanu'
    })
})

router.get('/login', (req, res) => {
    res.render('login', {
        name: 'Ikechukwu Okanu'
    })
})

router.get('/signup', (req, res) => {
    res.render('signup', {
        name: 'Ikechukwu Okanu'
    })
})

router.get('/enterdata', (req, res) => {
    res.render('enterdata',{
        name: 'Ikechukwu Okanu'
    })
})

router.get('/chat', (req, res) => {
    res.render('chat',{
        name: 'Ikechukwu Okanu'
    })
})

router.get('/help', (req, res) => {
    res.render('help',{
        name: 'Ikechukwu Okanu'
    })
})

router.get('/react', (req, res) => {
    res.render('react',{
        name: 'Ikechukwu Okanu'
    })
})

router.get('*', (req, res) => {
    res.render('404',{
        name: 'Ikechukwu Okanu'
    })
})

module.exports = router