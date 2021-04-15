const mongoose = require("mongoose")
const productsSchema = require("./products-schema")
const ProductsModel = mongoose.model("ProductsModel", productsSchema)

module.exports = ProductsModel