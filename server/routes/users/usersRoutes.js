const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const User = require('../../models/users/userModel');


// Save users in DB
// route.route('/users/save').post(function(req, res) {

// });

// Get all users from DB
router.route('/users').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            return res.send(err);
        }

        return res.json(users);
    });
});

// Add new user to Db
router.route('/users').post(function(req, res) {
    const user = new User(req.body.user);
    const image = req.body.user.image;

    user.save(function(err, user) {
        if (err) {
            return res.send(err);
        }

        fs.writeFile(path.join(__dirname, 'images'), image, 'base64', function (err, data) {
            if (err)  {
                throw err;
            }
            console.log(data)
            res.send(user);
        });
    });
});

module.exports = router;