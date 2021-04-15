const mongoose = require("mongoose")
const usersSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    // isAdmin
}, {collection: "users"})

module.exports = usersSchema