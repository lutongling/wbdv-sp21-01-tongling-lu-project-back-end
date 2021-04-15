const mongoose = require("mongoose")
const productsSchema = mongoose.Schema({
    name: String,
    image: String,
    price: String,
    brand: String,
    rating: Number,
    description: String
}, {collection: "products"})

module.exports = productsSchema