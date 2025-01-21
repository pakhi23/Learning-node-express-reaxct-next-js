const jwt = require('jsonwebtoken');
const user = require('../models/User');


// middlware to verify jwt token
const authenticationToken = async (req, res, next) => {
    const token = req.header('Authorization'); // token ko header se nikalte he

    if (!token) return res.status(401).json({
        success: false,
        message: "Access denied, no token provided",
    });
    try {
        const decode = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET); // token vo verify krte he
        req.user = await user.findById(decode.id);  
        if (!req.user)  return res.status(404).json({
            success: false,
            message: "User not found",
        });
        next();
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid token",
        });
    }

};

module.exports = authenticationToken;
