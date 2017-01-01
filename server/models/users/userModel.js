const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userCollection = 'users';
const statuses = ['in_progress', 'not_active', 'complete'];

const UserSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    department: { type: String, required: true },
    mail: String,
    room: { type: String, required: true },
    status: { type: String, enum: statuses, required: true },
    image: { type: String }
}, { collection: userCollection });

module.exports = mongoose.model('User', UserSchema);