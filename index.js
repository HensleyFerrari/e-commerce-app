const express = require('express')
const bodyParser = require('body-parser')
const usersRepo = require("./repositories/users")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
        <div>
        <form method="POST">
            <input placeholder="email" name="email" />
            <input placeholder="password" name="password" />
            <input placeholder="confirm password" name="passwordConfirmation" />
            <button>Sign up</button>
        </form>
        </div>
    `)
})

app.post('/', async (req, res) => {
    const { èmail, password, passwordConfirmation } = req.body

    const existingUser = await usersRepo.getOneBy({ email })
    if(existingUser) {
        return res.send('Email in use')
    }

    if(password !== passwordConfirmation){
        return res.send('Passwords must match')
    }

    res.send('Account created!!!')
})

app.post('/products', (req, res) => {

})

app.listen(3000, () => {
    console.log('App is running on port 3000')
})