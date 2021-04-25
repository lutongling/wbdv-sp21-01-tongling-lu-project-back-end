const mongoose = require("mongoose")
const productsSchema = mongoose.Schema({
    name: String,
    image: String,
    price: String,
    brand: String,
    rating: Number,
    reviews: String,
    description: String,
    user: {
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    }
}, {collection: "products"})

module.exports = productsSchema