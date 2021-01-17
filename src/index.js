const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const hbs = require('hbs')
require('./db/mongoose')
//const Trader = require('./models/trader')
//const bodyParser = require('body-parser')
const pagesRouter = require('./routers/pages')
const traderRouter = require('./routers/traders')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000

//setup handlebars and views location
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

//setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(pagesRouter)
app.use(traderRouter)



io.on('', () => {
    console.log('New WebSocket connection')
})

server.listen(port, () => {
    console.log(`server is up on port ${port}!`)
})