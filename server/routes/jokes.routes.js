// IMPORT THE CONTROLLER
const Joke = require("../controllers/jokes.controller")
// console.log(Joke);

module.exports = (app) => {
    app.get("/api/jokes/all", Joke.findAll)
    app.post("/api/jokes/new", Joke.create)
    app.get("/api/jokes/random", Joke.random)
    app.get("/api/jokes/:id", Joke.findOne)
    app.put("/api/jokes/update/:id", Joke.update)
    app.delete("/api/jokes/delete/:id", Joke.delete)
}