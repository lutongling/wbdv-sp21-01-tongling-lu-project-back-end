const mongoose = require("mongoose")
const usersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    email: String,
    phone: String,
    role: {type: String, enum: ['ADMIN', 'SELLER', 'BUYER']}
}, {collection: "users"})

module.exports = usersSchema