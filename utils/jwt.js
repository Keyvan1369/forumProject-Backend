const jwt = require("jsonwebtoken")

const setToken = (payload) =>{
    return jwt.sign(
   payload,
"SSSRFG??%&Q@4455130",{expiresIn:"7d"})
}
module.exports={
    setToken
}