const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const hbs = require('hbs')
require('./db/mongoose')
const currencySymbol = require('currency-symbol')
const Trader = require('./models/trader')
const Order = require('./models/order')
const bodyParser = require('body-parser')
const pageRouter = require('./routers/pages')
const traderRouter = require('./routers/traders')
const orderRouter = require('./routers/orders')

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
app.use(traderRouter)
app.use(orderRouter)
app.use(pageRouter)




io.on('', () => {
    console.log('New WebSocket connection')
})

server.listen(port, () => {
    console.log(`server is up on port ${port}!`)
})


const main = async () => {
    const order = await Order.findById('660fcaafbde61a41cb44a2bf7')
    console.log(order)
    await order.populate('trader').execPopulate()
    console.log(order.trader)

    // const trader = await Trader.findById('60fca5a7dd74c73058d62c30')
    // await trader.populate('orders').execPopulate()
    // console.log(trader.orders)


}

main()