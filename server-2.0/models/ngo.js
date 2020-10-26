const mongoose = require('mongoose')

const User = require('./users')

const ngoSchema = mongoose.Schema({
  name: {type: String},
  location: {type: String},
  ratings: {type: Number, default : 0},
  comments : [{userinfo : {type: mongoose.ObjectId, ref: 'User'}, comments : {type: String}, stars : {type: Number} }],
  parcelsincollections : [{userInfo : {type: mongoose.ObjectId, ref: 'User'}}]
})

module.exports = mongoose.model('NGO', ngoSchema)