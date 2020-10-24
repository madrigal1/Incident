const express = require('express')
const mongoose = require('mongoose')

const User = require('../models/users')
const Worker = require('../models/service-worker')
const NGO = require('../models/ngo')
const info = require('../middleware/checkuserinfo')
const router = express.Router();

router.get('/assignservice/:id', async(req, res) => {
    var id = req.params.id 
    try{
        const user = await User.find({_id: id})
        const ngo = await NGO.find({})
        console.log(user[0].location)

        var worker = await Worker.find({source: user[0].location})
        console.log(worker[0]._id)
        user[0].personincharge = worker[0]._id
        
        await user[0].populate('personincharge').execPopulate()
        console.log(user);
        res.send(`Hello World`)
    } catch (e){
        console.log(e);
        res.send(e);
    }
})

module.exports = router;