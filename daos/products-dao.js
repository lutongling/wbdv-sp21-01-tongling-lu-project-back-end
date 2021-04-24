const productsModel = require("../models/products/products-model")

const createProduct = (product) => {
    return productsModel.create(product)
}

const findAllProducts = () => {
    return productsModel.find()
}
const findProductById = (pid) => {
    return productsModel.findById(pid)
}

module.exports = {
    createProduct,
    findProductById,
    findAllProducts
}