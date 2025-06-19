const express = require("express");
const { UserModel, TodoModel } = require("./db");
const app = express();
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "pranav123441";

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://raypranav718:LlEqg79QPeQKg3R9@cluster0.21sjbij.mongodb.net/todo-app-database");   // we have to add the last path to the link


app.use(express.json());

app.post("/signup", async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    
    //bcrypt.hash(password,5, async function(err,hash){
    //    const hashPassword = await hash;
    //})

    let errorThrown = false;
    try{
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);

        await UserModel.create({
            username: username,
            password: hashedPassword,
            name: name
        })
    }catch(e){
        res.json({
            message: "User already exists"
        })
        errorThrown  = true;
    }

    if(!errorThrown){
        res.json({
            message: "You are signed up"
        })
    }
    
});

app.post("/signin", async function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({
        username: username,    //first, find and give me the user who has this email, we are not comparing password anymore because plaintext password will always be different from the hashed password.
    })

    if(!user){
        res.status(403).json({
            message: "User does not exist in out db"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    console.log(user);

    if(passwordMatch){
        const token = jwt.sign({id: user._id.toString()}, JWT_SECRET);
        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

app.post("/todo", auth, async function(req,res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    })

    res.json({
        message: "Todo created"
    })
})

app.post("/todos", auth, async function(req,res){
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId: userId
    })

    if(user){
        res.json({todos})
    }else{
        res.status(403).json({message: "Can't find the todo"})
    }
    
})

function auth(req,res,next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next()
    }else{
        res.status(403).json({
            message: "Incorrect credentials"
        }) 
    }
}

app.listen(3000);