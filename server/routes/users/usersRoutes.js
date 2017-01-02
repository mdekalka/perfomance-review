const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const User = require('../../models/users/userModel');

// Get all users from DB
router.route('/users').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            return res.send(err);
        }

        return res.json(users);
    });
});

// Add multiple users to DB
router.route('/users/add').post(function(req, res) {
    const users = req.body.users;

    // var array = [{ type: 'jelly bean' }, { type: 'snickers' }];

    User.create(users, function (err, users) {
        if (err)  {
            return res.send(err);
        }

        res.json(users);
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

        // fs.writeFile(path.join(__dirname, 'images'), image, 'base64', function (err, data) {
        //     if (err)  {
        //         throw err;
        //     }
        //     console.log(data)
        //     res.send(user);
        // });

         res.send(user);
    });
});

// Return user by id
router.route('/users/:id').get(function(req, res) {
    User.findOne({
        _id: req.params.id
    }, function(err, user) {
        if (err) {
            return res.send(err);
        }

        res.json(user);
    });
});

// Remove user by id
router.route('/users/:id').delete(function(req, res) {
    const id = req.params.id;

    User.remove({
        _id: id
    }, function(err, info) {
        if (err) {
            return res.send(err);
        }

        res.json({
            id: id
        });
    });
});

// Update user by id
router.route('/users/:id').put(function(req, res) {
    User.findOne({
        _id: req.params.id
    }, function(err, user) {
        if (err) {
            return req.send(err);
        }

        for (const prop in req.body.user) {
            user[prop] = req.body.user[prop];
        }

        user.save(function(err, user) {
            if (err) {
                return res.send(err);
            }

            res.send(user);
        });
    })
});

module.exports = router;