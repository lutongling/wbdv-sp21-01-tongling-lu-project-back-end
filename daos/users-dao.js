const usersModel = require("../models/users/users-model")

const findAllUsers = () => {
    return usersModel.find()
}

const findUserById = (uid) => {
    return usersModel.findById(uid)
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
    return usersModel.findOneAndUpdate(
        {_id: userId}, {$set: newUser})
}

module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername,
    findUserByCredentials,
    createUser,
    updateUser
}