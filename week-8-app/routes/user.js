const { Router } = require("express");  // express contains a key called router
const userRouter = Router();
const { userModel } = require('../db')

userRouter.post('/signup', function(req,res) {
    res.json({
        message: "signup endpoint"
    })
})

userRouter.post('/signin', function(req,res) {

    res.json({
        message: "signin endpoint"
    })
})

userRouter.get('/purchases', function(req,res) {

    res.json({
        message: "purchases endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}