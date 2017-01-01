const mongoose = require('mongoose');

const User = require('./userModel');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    users: [User]
});

module.exports = mongoose.model('Users', UsersSchema);