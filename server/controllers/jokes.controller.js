//=======CONTROLLER FOR CRUD import the model to use queries======
const Joke = require("../models/jokes.model");

module.exports = {
    //READ ALL
    findAll: (req, res) => {
        Joke.find()
            .then((jokes) => {
                console.log(jokes);
                return res.json(jokes)
            })
            .catch(err => res.json(err))
    },
    // CREATE
    create: (req, res) => {
        // Pass in body data
        Joke.create(req.body)
            .then(newJoke => {
                console.log("DB Success created new Joke");
                return res.json(newJoke)
            })
            .catch(err => {
                console.log("DB Error creating joke");
                return res.json(err)
            })
    },
    //READ ONE===
    findOne: (req, res) => {
        console.log(req.params);
        Joke.findById(req.params.id)
            .then(joke => res.json(joke))
            .catch(err => res.json(err))
    },
    //UPDATE===
    update: (req, res) => {
        console.log("UPDATE :", req.params.id);
        console.log("Update Obj:", req.body);
        Joke.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.json(err))
    },
    //RANDOM===
    random: (req, res) => {
        Joke.find()
        .then((jokes) => {
            let randomJoke = Math.floor(Math.random() * jokes.length)
            res.json(jokes[randomJoke])
        })
        .catch((err) => req.json(err))
    },
    //DELETE===
    delete: (req, res) => {
        console.log(req.params.id);
        Joke.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}