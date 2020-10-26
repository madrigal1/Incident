const mongoose = require('mongoose')
const User = require('./users')

const feedsSchema = mongoose.Schema({
    feeds : {
        type: String 
    },
    incharge : {
        type: String
    },
    userinfo : {type: mongoose.ObjectId, ref: User}
})

module.exports = mongoose.model('Feeds', feedsSchema)