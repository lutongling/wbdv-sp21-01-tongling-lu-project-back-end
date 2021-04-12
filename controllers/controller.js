const productService = require("../services/products-service")

module.exports = (app) => {
    const findAllProducts = (req, res) => {
        const products = productService.findAllProducts()
        res.send(products)
    }

    app.get('/api/products', findAllProducts)

}