const express = require("express");
const app = express();

app.get('/sum', (req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a+b
    })
})

//subtract/1/2
app.get('/subtract/:a/:b', (req,res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a - b
    })
})

app.get('/multiply', (req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a*b
    })
})

app.get('/divide', (req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a%b
    })
})

app.listen(3000);