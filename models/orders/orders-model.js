const mongoose = require("mongoose")
const ordersModel = require("./orders-schema")
const OrdersModel = mongoose.model("OrdersModel", ordersModel)

module.exports = OrdersModel
