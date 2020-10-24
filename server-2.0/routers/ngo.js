const express = require('express')
const mongoose = require('mongoose')

const User = require('../models/users')
const NGO = require('../models/ngo')
const Worker = require('../models/service-worker')
const info = require('../middleware/checkuserinfo')
const router = express.Router();

router.post('/addngos', async (req, res) => {
    const {name, location, ratings} = req.body;
    try {
        const newngo = await new NGO({name, location, ratings})
        await newngo.save();
        res.send(newngo)
    } catch (e) {
        console.log(e);
        res.send(e);
    }
})

module.exports = router;