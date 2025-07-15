const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username,password){
    /*
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse.success || passwordResponse.success){
        return null;
    }
    */

    const signature = jwt.sign({
        username
    },jwtPassword);

    return signature;
}

function decodeJwt(token){
    let decoded = jwt.decode(token);
    if(decoded){
        return true;
    }else{
        return false;
    }
}

function verifyJwt(token){
    let ans = true;            //for verifyjwt we cant just do if-else like decodejwt, because this can throw errors aswell
    try{
        jwt.verify(token,jwtPassword)
    }catch(e){
        ans = false
    }
    return ans;
}

const ans = signJwt("raypranav","abcd1234")
console.log(ans);

const ans2 = decodeJwt("abcd");
console.log(ans2);
const ans3 = decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJheXByYW5hdiIsImlhdCI6MTc0OTcwNDIzMn0.Qy_X_8xYoGwjGl9ZfMGqLCy0VJhKi1eUCh-54YZiRJY");
console.log(ans3);

const ans4 = verifyJwt("",jwtPassword);
console.log(ans4);

const ans5 = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJheXByYW5hdiIsImlhdCI6MTc0OTcwNDIzMn0.Qy_X_8xYoGwjGl9ZfMGqLCy0VJhKi1eUCh-54YZiRJY", jwtPassword)
console.log(ans5);