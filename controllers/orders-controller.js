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

    const deleteOrder = (req, res) => {
        const oid = req.body._id
        orderDao.deleteOrder(oid)
            .then(order => res.send(order))
    }

    const updateOrder = (req, res) => {
        const newOrder = req.body;
        console.log(newOrder)
        orderDao.updateOrder(newOrder._id, newOrder)
        res.send(newOrder)
    }

    app.get("/api/orders", findAllOrders)
    app.get("/api/orders/:uid", findOrdersByUserId)
    app.post("/api/orders", createOrder)
    app.delete('/api/orders', deleteOrder)
    app.put('/api/orders', updateOrder)

}