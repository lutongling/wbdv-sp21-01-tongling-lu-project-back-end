const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const userDao = require("../daos/users-dao")

module.exports = (app) => {

    const findAllUsers = (req, res) => {
        userDao.findAllUsers()
            .then((users) => {
                res.send(users)
            })
    }

    const findUserById = (req, res) => {
        const userId = req.params["uid"]
        userDao.findUserById(userId)
            .then((user) => {
                res.send(user)
            })
    }

    const register = (req, res) => {
        const credentials = req.body;
        userDao.findUserByUsername(credentials.username)
            .then((actualUser) => {
                if(actualUser.length > 0) {
                    res.send("0")
                } else {
                    userDao.createUser(credentials)
                        .then((newUser) => {
                            req.session['profile'] = newUser
                            res.send(newUser)
                        })
                }
            })
    }

    const profile = (req, res) => {
        const currentUser = req.session["profile"]
        res.send(currentUser)
    }

    const login = (req, res) => {
        const credentials = req.body;
        userDao.findUserByCredentials(credentials)
            .then((actualUser) => {
                if(actualUser) {
                    req.session['profile'] = actualUser
                    res.send(actualUser)
                } else {
                    res.send("0")
                }
            })
    }

    const logout = (req, res) => {
        req.session.destroy()
        res.send(200)
    }

    // const updateUser = (req, res) => {
    //     // const currentUserId = req.body._id;
    //     const currentUser = req.body;
    //     // const currentUser = req.session["profile"]
    //     userDao.updateUser(currentUser._id, currentUser).save()
    //     res.send(currentUser)
    // }

    app.get("/api/users/register", findAllUsers)
    app.get("/api/users/:uid", findUserById)
    app.post("/api/users/register", register)
    app.post("/api/users/profile", profile)
    app.post("/api/users/login", login)
    app.post("/api/users/logout", logout)

    // how to do?
    // app.put("/api/users/profile", updateUser)

}