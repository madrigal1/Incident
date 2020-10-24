const express = require('express')
const mongoose = require('mongoose')

const User = require('../models/users')
const info = require('../middleware/checkuserinfo')
const router = express.Router();

router.post('/adduserinfo', info,async (req, res) => {
    const {contact, location, donationtype} = req.body
    try {
        const user = await User.findOne({name: req.user.name})
        console.log(user)
        console.log(contact, location, donationtype)
        user.contact = contact
        user.location = location
        user.donationtype = donationtype
        await user.save();
        res.send(req.user)
    } catch(e) {
        console.log(e);
        res.send(e);
    }
})

module.exports = router;