const fs = require("fs");

/*
function print(err,data){
    console.log("Error is: ");
    console.log(err);

    console.log("Data is: ");
    console.log(data);
}

const contents = fs.readFile("a.txt", "utf-8", print);
const contents2 = fs.readFile("b.txt", "utf-8", print);

console.log("done!")
*/

// basically error and data ke liye alag functions banayenge and uske help se promisified version banega readFile ka

function readFilePromisified(filePath){

}

function onDone(){
    console.log("Data is: ");
}

readFilePromisified("a.txt").then(onDone).catch(onError);
