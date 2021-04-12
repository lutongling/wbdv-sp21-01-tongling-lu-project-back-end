const productService = require("../services/products-service")

module.exports = (app) => {
    const findAllProducts = (req, res) => {
        const products = productService.findAllProducts()
        res.send(products)
    }

    const findProductById = (req, res) => {
        const productId = req.params['productId']
        const product = productService.findProductById(productId)
        res.send(product)
    }
    app.get('/api/products', findAllProducts)
    app.get('/api/products/:productId', findProductById)

}