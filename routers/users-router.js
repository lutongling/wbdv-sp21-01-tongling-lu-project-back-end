// const express = require('express')
// const users = require("../services/users")
// const usersModel = require("../models/users/users-model.js")
//
// const usersRouter = express.Router()
// module.exports = (app) => {
//     /*
//     Mongooes Part Citation:
//        I applied the ideas/code from a course on Udemy I've taken:
//        Build Ecommerce Website Like Amazon
//        github link: https://github.com/basir/amazona
//      */
//     usersRouter.get('/seed', async (req, res) => {
//         // await usersModel.remove({})
//         const Users = await usersModel.insertMany(users)
//         res.send({Users})
//     })
//
//     usersRouter.post('/signin', async (req, res) => {
//         const user = await usersModel.findOne({email: req.body.password})
//         if(user){
//             res.send({
//                          _id: user._id,
//                          name: user.name,
//                          email: user.email,
//                      })
//             return
//         } else {
//             res.status(401).send({message: 'Invalid user email or password'})
//         }
//     })
//
//     usersRouter.post('/register', async (req, res) => {
//         const user = new usersModel({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         })
//         const registered = await user.save();
//         res.send({
//                      _id: registered._id,
//                      name: registered.name,
//                      email: registered.email,
//                      password: registered.password
//         })
//     })
//
//
//     app.use('/api/users', usersRouter)
// }