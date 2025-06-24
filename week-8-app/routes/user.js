const { Router } = require("express");  // express contains a key called router
const userRouter = Router();
const { userModel } = require('../db');

const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require('../config');

const { z } = require("zod");
const bcrypt = require("bcrypt")

userRouter.post('/signup', async function(req,res) {
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
    
    const { email,password,firstName,lastName } = req.body; 

    let errorThrown = false;
    try{
        const hashedPassword = await bcrypt.hash(password,5);

        await userModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        })
    }catch(e){
        res.json({
            message: "User already exists"
        })
        errorThrown = true;
    }

    if(!errorThrown){
        res.json({
            message: "You are signed up"
        })
    }

})

userRouter.post('/signin', async function(req,res) {
    const {email,password} = req.body;

    const user = await userModel.findOne({    //either returns the user or undefined, if we use userModel.find, we will get an array 
        email: email,   //first, find and give me the user who has this email, we are not comparing password anymore because plaintext password will always be different from the hashed password. 
    })

    if(!user){
        res.status(403).json({
            message: "User does not exists"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password,user.password);
    if(passwordMatch){
        const token = jwt.sign({id: user._id.toString()}, JWT_USER_PASSWORD);
        // OR do cookie logic 
        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

userRouter.get('/purchases', function(req,res) {

    res.json({
        message: "purchases endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}