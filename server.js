const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/treasurehunter',
                 {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require("./controllers/controller")(app)
require("./routers/users-router")(app)

// TODO: FIX
//require("./routers/products-router")(app)

app.listen(7000);
