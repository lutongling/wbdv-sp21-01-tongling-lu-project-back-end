const express = require('express')
const products = require("../services/product")
const productsModel = require("../models/products/products-model")

const productsRouter = express.Router()
module.exports = (app) => {
    /*
    Mongooes Part Citation:
        I applied the ideas/code from a course on Udemy I've taken:
    Build Ecommerce Website Like Amazon
    github link: https://github.com/basir/amazona
        */
    productsRouter.get('/seed', async (req, res) => {
        const Products = await productsModel.insertMany(products)
        res.send({Products})
    })

    // how to fix this to combine with "api/products"
    //app.use('/api/products/p', productsRouter)
}