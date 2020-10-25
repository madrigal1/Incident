const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

// Loading Database 
require('./database/mongoose')

require('./config/passport-setup')

const app = express()

const PORT = process.env.PORT || 3000 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(passport.initialize());
app.use(passport.session());

app.use(require('./routers/auth'))
app.use('/user', require('./routers/userinfo'))
app.use('/ngo', require('./routers/ngo'))
app.use('/comp', require('./routers/computation'))
app.use('/feeds', require('./routers/feeds'))
app.use('/stripe', require('./routers/stripe'))

app.listen(PORT, console.log(`Server Running on Port ${PORT}`))