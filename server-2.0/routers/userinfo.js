const express = require('express')
const mongoose = require('mongoose')

const User = require('../models/users')
const Worker = require('../models/service-worker')
const info = require('../middleware/checkuserinfo')
const router = express.Router();

router.post('/adduserinfo', info,async (req, res) => {
    const {contact, location, donationtype, destination} = req.body
    try {
        const user = await User.findOne({name: req.user.name})
        console.log(user)
        console.log(contact, location, donationtype, destination, ngoChosen)
        user.contact = contact
        user.location = location
        user.donationtype = donationtype
        user.destination = destination
        user.ngoChosen = ngoChosen
        await user.save();
        res.send(user)
    } catch(e) {
        console.log(e);
        res.send(e);
    }
})

router.post('/addserviceincharge', async(req, res) => {
    try{
        const {name, source, destination, contact} = req.body;
        const newuser = await new Worker({name, source, destination, contact})
        await newuser.save();
        res.send(newuser)
    } catch (e) {
        console.log(e);
        res.send(e);
    }
})


module.exports = router;