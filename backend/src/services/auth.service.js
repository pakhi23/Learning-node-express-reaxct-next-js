const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// JWT token generate krne ke liye function

    const generateToken = (user) =>{
        return jwt.sign(
            {id:user._id, email:user.email}, // user ka id or toke nemail mestore kr rahe he
            process.env.JWT_SECRET, //jwt secret use krte hue sign kr rahe he
            {expiresIn:process.env.JWT_EXPIRE_IN} // token ak expiretion timedefine kiya env se lekr
        );
    };



// Register user Services
const registerUser = async (name,email,password) =>{

    
    // user exist he ya nahi vo check kr rage he

    const userExists = await User.findOne({email});
    if(userExists){
        throw new Error('user already exists');
    };

    // new user create kr rhe he
    const user = new User({name,email,password});
    await user.save();

    // JWT token generate kr rahe
    const token = generateToken(user);
    return {user, token};  // user or token return kr rahe he
};

// login services

const loginUser = async (email,password)=>{
    const user  = await User.findOne({email});
    if(!user){
        throw new Error('Invalid Credentials'); // passwrodglt ho to
    };

    // password conpare krte he hashedse
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
    throw new Error('Invalid credentials');
    }

    // JWT token generate kr rahe he
    const token = generateToken(user);
    return {user,token}; //user or token return

}

module.exports  = {registerUser,loginUser};

