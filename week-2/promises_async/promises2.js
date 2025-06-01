// function random(resolve) {
// resolve();
// }

// function callback(){
// console.log("Promise logged successfully!");
// }

// let p = new Promise(random);    // a promise is supposed to return sonething eventually 
// p.then(callback)                // whenever resolve gets called, then callback gets called



// setTimeout promisified version

function setTimeoutPromisified(time){
    return new Promise(function (resolve){
        setTimeout(resolve,time);
    });
}

const p = setTimeoutPromisified(5000);

function callback(){
    console.log("Callback is called after 5 seconds");
}

p.then(callback);

/*
function readFile(fileName){
    // read the file and return its value
    return new Promise();
}

const p = readFile("a.txt");
// matlab ki p is the proxy to the final value, ki final value abhi tak aaya nhi hai
// and so, whenever the final value is known, THEN please call the callback function 

function callback(contents){
    console.log(contents);
}

p.then(callback);
*/