const mongoose = require('mongoose');
const productService = require("../services/products-service")
const productDao = require("../daos/products-dao")

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

    const createProduct = (req, res) => {
        const product = req.body;
        productDao.createProduct(product)
            .then((product) => {
                res.send(product)
            })
    }

    const findAllProducts_DB = (req, res) => {
        productDao.findAllProducts()
            .then((products) => {
                res.send(products)
            })
    }

    const findProductById_DB = (req, res) => {
        const productId = req.params['productId']
        productDao.findProductById(productId)
            .then(product => res.send(product))
    }

    const findProductByUserId_DB = (req, res) => {
        const uid = req.params['uid']
        productDao.findProductByUserId(uid)
            .then(product => res.send(product))
    }

    const deleteProduct = (req, res) => {
        const pid = req.body._id
        productDao.deleteProduct(pid)
            .then(product => res.send(product))
    }

    const updateProduct = (req, res) => {
        const newProduct = req.body;
        console.log(newProduct)
        productDao.updateProduct(newProduct._id, newProduct)
        res.send(newProduct)
    }

    app.get('/api/products', findAllProducts)
    app.get('/api/products/:productId', findProductById)
    app.get('/api/products_db', findAllProducts_DB)
    app.get('/api/products_db/:productId', findProductById_DB)
    app.get('/api/products_db/user/:uid', findProductByUserId_DB)
    app.post('/api/products_db', createProduct)
    app.delete('/api/products_db', deleteProduct)
    app.put('/api/products_db', updateProduct)

}