require('dotenv').config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');
app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/course',courseRouter);

async function main(){
    // instead of storing string in mongoose.connect, we should use something called dotenv
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000)
}

main();