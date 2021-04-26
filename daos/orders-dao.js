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

const updateOrder = (oid, newOrder) => {
    ordersModel.findOneAndUpdate({_id: oid}, {$set: newOrder}, {new:true}, function(err,doc) {
        if (err) { throw err; }
        else { console.log("Updated Product"); }

    });
}

module.exports = {
    findAllOrders,
    findOrderById,
    findOrdersByUserId,
    createOrder,
    deleteOrder,
    updateOrder
}