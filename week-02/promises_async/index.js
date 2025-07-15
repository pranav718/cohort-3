const prompt = require("prompt-sync")();

function sum(n){
    let ans = 0;
    for(let i=1; i<=n; i++){
        ans= ans+i;
    }
    return ans
}

let a = parseInt(prompt("Input till which number to find sum: "));
let ans = sum(a);

console.log("Sum of the following numbers: ",ans);
