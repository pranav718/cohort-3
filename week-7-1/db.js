const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    username: {type: String, unique: true},  // the emails should be unique
    password: String,
    name: String
})

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId    // we have to import this
})

const UserModel = mongoose.model('users', User);     
const TodoModel = mongoose.model('todos', Todo);    //konse collection me rakhna hai and uska schema kaisa hai

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
}