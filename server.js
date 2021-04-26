require('dotenv').config();
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const uri = process.env.MONGODB_URI || "mongodb+srv://lutongling:Shmily960105@cluster0.e6uhf.mongodb.net/treasure_hunter?retryWrites=true&w=majority"


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use session
const session = require('express-session')
app.use(session({
                    secret: 'keyboard cat',
                    resave: false,
                    saveUninitialized: true
}))

const mongoose = require('mongoose');
mongoose.connect(uri || "mongodb://localhost:27017/treasure_hunter",
                 {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect('mongodb://localhost:27017/treasure_hunter',
//                  {useNewUrlParser: true, useUnifiedTopology: true});

// Configures CORS
app.use(function (req, res, next) {
    // add heroku to the allow-origin after deployment
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});



require("./controllers/products-controller")(app)
require("./controllers/users-controller")(app)
require("./controllers/orders-controller")(app)

const port = process.env.PORT || 7000;
app.listen(port);
