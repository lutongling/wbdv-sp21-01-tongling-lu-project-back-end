const mongoose = require('mongoose');
const orderDao = require("../daos/orders-dao")

module.exports = (app) => {
    const findAllOrders = (req, res) => {
        orderDao.findAllOrders()
            .then((orders) => {
                res.send(orders)
            })
    }

    const findOrdersByUserId = (req, res) => {
        const uid = req.params['uid']
        orderDao.findOrdersByUserId(uid)
            .then((orders) =>{
                res.send(orders)
            })
    }

    const createOrder = (req, res) => {
        const order = req.body
        orderDao.createOrder(order)
            .then((order) => {
                res.send(order)
            })
    }


    app.get("/api/orders", findAllOrders)
    app.get("/api/orders/:uid", findOrdersByUserId)
    app.post("/api/orders", createOrder)
}