const express = require('express');
const router = express.Router();
require('../db/connect');
const User = require('../models/user.model');

router.route("/create").post((req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const data = new User({
        email,
        username,
        password
    })
    data.save();
})

router.route("/users").get((req, res) => {
    User.find()
    .then((data)=>res.json(data))
})

module.exports = router;