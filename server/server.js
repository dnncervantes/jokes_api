const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "jokesDB";



//=====MIDDLEWARE======
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

//=====DATABASE CONNECTION=========
require("./config/mongoose.config")();

// This is where we import the users routes function from our user.routes.js file
//====CONNECT THE ROUTES====== 
const allMyJokeRoutes = require("./routes/jokes.routes")(app);
// allMyJokeRoutes(app);
//.gitignore


// Keep this at the bottom
app.listen(PORT, () => {
    console.log(`Server is locked and loaded on port ${PORT}`)
});
