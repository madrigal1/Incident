const express = require('express')
const mongoose = require('mongoose')

const User = require('../models/users')
const Worker = require('../models/service-worker')
const NGO = require('../models/ngo')
const Feeds = require('../models/feeds')
const info = require('../middleware/checkuserinfo')
const router = express.Router();

router.post('/postfeeds/:id', info, async (req, res) => {
    var id = req.params.id 
    const {feeds} = req.body
    try {
        if (!req.user.isAdministrator){
            var feeds1 = await new Feeds({feeds, incharge: req.user.name, userinfo: id})
            await feeds1.populate('userinfo').execPopulate()
            res.send(feeds1)
        }
    } catch (e) {
        console.log(e);
        res.send(e);
    }
})

module.exports = router;