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

// const findUserByCredentials = (credentials) => {
//     return usersModel.findOne({
//                                   username: credentials.username,
//                                   password: credentials.password
//                               })
// }

const createOrder = (order) => {
    return ordersModel.create(order)
}

// const updateUser = (userId, newUser) => {
//     usersModel.findOneAndUpdate({_id: userId}, {$set: newUser}, {new:true}, function(err,doc) {
//         if (err) { throw err; }
//         else { console.log("Updated"); }
//
//     });
//
//     // console.log(newUser.username)
//     // console.log(userId)
//     // return usersModel.findOneAndUpdate(
//     //     {_id: userId}, {$set: {username:newUser.username}})
// }

module.exports = {
    findAllOrders,
    findOrderById,
    findOrdersByUserId,
    createOrder
}