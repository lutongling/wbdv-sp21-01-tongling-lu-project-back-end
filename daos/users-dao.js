const usersModel = require("../models/users/users-model")

const findAllUsers = () => {
    return usersModel.find()
}

const findUserByUsername = (username) => {
    return usersModel.find({username: username})
}

const findUserByCredentials = (credentials) => {
    return usersModel.findOne({
        username: credentials.username,
        password: credentials.password
  })
}

const createUser = (user) => {
    return usersModel.create(user)
}

const updateUser = (userId, newUser) => {
    return usersModel.updateOne(
        {_id: userId}, {$set: newUser})
}

module.exports = {
    findAllUsers,
    findUserByUsername,
    findUserByCredentials,
    createUser,
    updateUser
}