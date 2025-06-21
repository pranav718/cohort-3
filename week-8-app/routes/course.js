const { Router } = require("express");
const courseRouter = Router();

courseRouter.post('/course/purchase', function(req,res) {

    res.json({
        message: "purchase endpoint"
    })
})

courseRouter.get('/course/preview', function(req,res) {

    res.json({
        message: "courses endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}