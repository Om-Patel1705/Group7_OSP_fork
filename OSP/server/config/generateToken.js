const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({id},"bdsikfubsdljcnsdc",{expiresIn:"30d"})
}

module.exports=generateToken;