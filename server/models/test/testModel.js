const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// name of the collection in db
const testCollection = 'test';

// Create new schema-model
const testSchema = new Schema({
    // type - format of data
    // required - flag that defined necessity of property
    // trim - string trim
    name: { type: String, required: true, trim: true },
    comments: [{ content: String }],
    // dedault - default value if property is not defined
    date: { type: Data, default: Date.now },
    // short definition of property
    completed: Boolean,
    // nested objects
    meta: {
        votes: Number,
        likes: Number
    }
});

// Functions added to the methods property of a schema get compiled into the Model prototype and exposed on each document instance:
testSchema.methods.showName = () => {
    console.log(`Hello ${this.name}`);
};


module.exports = mongoose.model('Test', testSchema);