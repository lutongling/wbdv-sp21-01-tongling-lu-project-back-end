const products = require("./products")

const findAllProducts = () => {
    return products
}

const findProductById = (pid) =>
    products.find((product) => (product.id).toString() === pid)

module.exports = {
    findAllProducts,
    findProductById
}