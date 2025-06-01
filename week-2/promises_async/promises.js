// A Promise in Javascript is an object that represents the eventual completion
// (or failure) of an asynchronous operation and resulting value 

// setTimeout(main,3000)  is a callback function that callbacks the main function after 3 seconds


function setTimeoutPromisified(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p;

    // understand it as how we initialized for an object for date class as:- let example = new Date();

    // this function returns an object of the Promise class
}
  
function callback() {
    console.log("3 seconds have passed");
}
  
setTimeoutPromisified(3000).then(callback)
  