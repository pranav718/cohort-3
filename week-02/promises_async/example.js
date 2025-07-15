const fs = require("fs");

function print(err,data){
    console.log("Error is: ");
    console.log(err);

    console.log("Data is: ");
    console.log(data);

    // or we could have written in if(err) type way to properly handle error
}

const contents = fs.readFile("a.txt", "utf-8", print);
const contents2 = fs.readFile("b.txt", "utf-8", print);

console.log("done!")