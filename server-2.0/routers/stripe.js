const express = require('express')
const mongoose = require('mongoose')

const User = require('../models/users')
const NGO = require('../models/ngo')
const Worker = require('../models/service-worker')
const info = require('../middleware/checkuserinfo')
const router = express.Router();
const stripe = require("stripe")("sk_test_51Hg9UEGWz8EMDG6ptLBAFX1BymenRiF4JCZu3InNNy1soOdh4a9oS8fulgYsAtFjA3x2iYuTcSexDdlTBUywZLPk00ZUQvkdOu");

const calculateOrderAmount = items => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};

router.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd"
    });
    res.send({
      clientSecret: paymentIntent.client_secret
    });
});
module.exports = router ;