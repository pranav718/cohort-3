const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

let users = [];
const JWT_SECRET = "pranav1234";

function logger(req,res,next){
    console.log(`${req.method} request came`)
    next()
}

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/signup', logger, (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    users.push({
        username: username,
        password: password
    })
    
    res.send("signed up successfully!");
    
})

app.post('/signin', logger, (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username == username && user.password == password);

    if(user){
        const token = jwt.sign( {username: user.username} , JWT_SECRET);
        //user.token = token;
        res.send({
            token
        })
        console.log(users);
    }else{
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    
})

function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData.username){
        req.username = decodedData.username;
        next()
    }else{
        res.json({
            message: "You are not logged in"
        })
    }
}

app.get('/me',logger, auth, (req,res) => {
    //const token = req.headers.token;  //jwt
    //const decodedInformation = jwt.verify(token,JWT_SECRET); // {username: "pranav123@gmail.com"}
    //const username = decodedInformation.username;

    const user = users.find(user => user.username == req.username);

    if(user){
        res.send({
            username: user.username,
            password: user.password
        })
    }else{
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

app.listen(3000);