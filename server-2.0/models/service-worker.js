const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    name : {type: String},
    source : {type: String},
    destination: {type: String},
    contact : {type : Number}
})

module.exports = mongoose.model('Workers', serviceSchema)