const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [10, "{PATH} must be at least 10 characters long"]
        },
        punchline: {
            type: String,
            required: [true, "{PATH} must be at least 10 characters long"]
        }
    }, {timestamps:true});

//=====Create the schema and export it====
const Joke = mongoose.model("Joke", JokesSchema)
module.exports = Joke;