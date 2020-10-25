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
        console.log(user[0].location)

        var worker = await Worker.find({source: user[0].location})
        console.log(worker[0]._id)
        user[0].personincharge = worker[0]._id
        
        await user[0].populate('personincharge').execPopulate()
        await user[0].save();
        console.log(user);
        res.send(user)
    } catch (e){
        console.log(e);
        res.send(e);
    }
})

router.post('/postcommentsforngo', info,async (req, res) => {
    const reviews = req.body.comments;
    try {
        const user = await User.findById(req.user._id)
        var ngo = await NGO.findOne({name: user.ngoChosen})
        var template = {userinfo : req.user._id, comments: reviews}
        ngo.comments.push(template)
        await ngo.populate('comments.userinfo').execPopulate()
        await ngo.save();
        res.send(ngo);
    } catch (e){
        console.log(e);
        res.send(e);
    }
})

module.exports = router;


/*
const ngo = await NGO.findById(id);
        const user = await User.find({_id: '5f94829db0e091fce25de714'})
        user[0].ngoChosen = 'ANOKHA NGO'
        console.log(user[0].ngoChosen)
        var template = { userinfo : '5f94829db0e091fce25de714', comments: 'Hello World -1'}
        ngo.comments.push(template)
        await ngo.populate('comments.userinfo').execPopulate()
        console.log(ngo)
        res.send(ngo);
*/