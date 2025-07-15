// Assignment
// 1. Create a backend server in node.js, that returns the sum endpoint
// 2. Write an HTML

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // the very first middleware that we are using else req.body would be undefined

app.post('/sum', (req,res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer: a + b
    })
})

app.listen(3000);