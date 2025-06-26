const rateLimit = require('express-rate-limit');

const rateLimitMiddleware = rateLimit({
    windowMs: 15*60*1000,
    max: 5,       
    message: "Too many requests from this IP, please try again later.",
    standardHeaders: true,    //return karega rate limit info in headers
    legacyHeaders: false    //disable karega older X-RateLimit headers
})

module.exports = {
    rateLimitMiddleware
}