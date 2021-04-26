const ordersModel = require("../models/orders/orders-model")

const findAllOrders = () => {
    return ordersModel.find()
}

const findOrderById = (oid) => {
    return ordersModel.findById(oid)
}

const findOrdersByUserId = (uid) => {
    return ordersModel.find({user: uid})
}

const createOrder = (order) => {
    return ordersModel.create(order)
}

const deleteOrder = (oid) => {
    console.log(oid)
    return ordersModel.findOneAndDelete({_id: oid})
}

module.exports = {
    findAllOrders,
    findOrderById,
    findOrdersByUserId,
    createOrder,
    deleteOrder
}