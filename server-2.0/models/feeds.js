const mongoose = require('mongoose')

const feedsSchema = mongoose.Schema({
    feeds : {
        type: String 
    },
    incharge : {
        type: String
    }
})

module.exports = mongoose.model('Feeds', feedsSchema)