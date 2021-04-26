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

const deleteProduct = (pid) => {
    console.log(pid)
    return productsModel.findOneAndDelete({_id: pid})
}

const updateProduct = (pid, newProduct) => {
    productsModel.findOneAndUpdate({_id: pid}, {$set: newProduct}, {new:true}, function(err,doc) {
        if (err) { throw err; }
        else { console.log("Updated Product"); }

    });
}

module.exports = {
    createProduct,
    findProductById,
    findAllProducts,
    findProductByUserId,
    deleteProduct,
    updateProduct
}