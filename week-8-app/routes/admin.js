const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require('../db');

const {z} = require("zod");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require('../config');
const { adminMiddleware } = require("../middleware/admin");
const { rateLimitMiddleware } = require("../middleware/ratelimit");

adminRouter.post('/signup', rateLimitMiddleware, async function(req,res) {
    const requiredBody = z.object({
            email: z.string().min(3).max(100).email(),
            password: z.string().min(5).max(15),
            firstName: z.string().min(3).max(15),
            lastName: z.string().min(3).max(15)
    })
    
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    if(!parsedDataWithSuccess){
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const {email, password, firstName, lastName} = req.body;
    
    let errorThrown = false;
    try{
        const hashedPassword = await bcrypt.hash(password,5);

        await adminModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        })
    }catch(e){
        res.status(403).json({
            message: "Admin already exists"
        })
        errorThrown = true;
    }

    if(!errorThrown){
        res.json({
            message: "You are signed up"
        })
    }
})

adminRouter.post('/signin', rateLimitMiddleware, async function(req,res) {
    const {email,password} = req.body;

    const admin = await adminModel.findOne({
        email: email
    })

    if(!admin){
        res.status(403).json({
            message: "Admin does not exists"
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password,admin.password);
    if(passwordMatch){
        const token = jwt.sign({id: admin._id.toString()}, JWT_ADMIN_PASSWORD);
        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }

})

adminRouter.post('/course', adminMiddleware, async function(req,res) {
    const adminId = req.userId;

    const { title, description, price, imageUrl } = req.body;

    // go through the video of creating a web3 saas in 6 hours to learn how to create a pipeline for a user to directly upload an image
    const course = await courseModel.create({
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl, 
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
})

adminRouter.put('/course', adminMiddleware, async function(req,res) {
    const adminId = req.userId;

    const { title, description, price, imageUrl, courseId } = req.body;

    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    }, {
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl
    })

    res.json({
        message: "Course updated",
        courseId: course._id
    })  
})

adminRouter.get('/course/bulk',adminMiddleware, async function(req,res) {
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId
    })
    
    res.json({
        message: "All courses",
        courses
    })
})

module.exports = {
    adminRouter: adminRouter
}