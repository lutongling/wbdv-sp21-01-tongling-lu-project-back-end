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

const findProductByUserId = (uid) => {
    console.log(uid)
    console.log("break")
    return productsModel.find({user: uid})
}

module.exports = {
    createProduct,
    findProductById,
    findAllProducts,
    findProductByUserId
}