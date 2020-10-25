const express = require('express')
const mongoose = require('mongoose')

const User = require('../models/users')
const Worker = require('../models/service-worker')
const NGO = require('../models/ngo')
const Feeds = require('../models/feeds')
const info = require('../middleware/checkuserinfo')
const router = express.Router();

router.post('/postfeeds', async (req, res) => {
    try {
        
    } catch (e) {
        console.log(e);
        res.send(e);
    }
})

module.exports = router;