const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const authRouter = require('./routes/admin/auth')
const adminProductsRouter = require('./routes/admin/products')
const productsRouter = require('./routes/products')
const cartRouter = require('./routes/carts')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({
    keys: ['0h1297ehx17h00']
}))

app.use(authRouter)
app.use(adminProductsRouter)
app.use(productsRouter)
app.use(cartRouter)

app.listen(3000, () => {
    console.log('App is running on port 3000')
})