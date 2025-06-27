const jwt = require("jsonwebtoken")
const { JWT_ADMIN_PASSWORD } = require('../config');

function adminMiddleware(req,res,next){
    const token = req.cookies.token;
    const decoded = jwt.verify(token,JWT_ADMIN_PASSWORD);

    if(decoded){
        req.userId = decoded.id;   // req.(kuchbhi) and decoded.id because while signin the jwt, we used id: admin._id
        next();
    }else{
        res.status(403).json({
            message: "You are not signed in"
        })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}