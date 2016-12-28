const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    author: String,
    description: String,
    rating: Number
}, { collection: 'testMovies' });

module.exports = mongoose.model('Movie', MovieSchema);