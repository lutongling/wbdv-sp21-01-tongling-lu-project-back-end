const express = require('express')
const users = require("../services/users")
const usersModel = require("../models/users/users-model.js")

const usersRouter = express.Router()
module.exports = (app) => {
    /*
    Mongooes Part Citation:
       I applied the ideas/code from a course on Udemy I've taken:
       Build Ecommerce Website Like Amazon
       github link: https://github.com/basir/amazona
     */
    usersRouter.get('/seed', async (req, res) => {
        await usersModel.remove({})
        const Users = await usersModel.insertMany(users)
        res.send({Users})
    })

    app.use('/api/users', usersRouter)
}