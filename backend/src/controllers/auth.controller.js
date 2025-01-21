const req = require('express/lib/request');
const { registerUser, loginUser } = require('../services/auth.service');

// reister controller
const register = async (req, res) => {
    
    const { name, email, password } = req.body;
    try {
        const { user, token } = await registerUser(name, email, password);
        res.status(201).json({
            success: true,
            message: "Registration successful",
            data: { user, token },
        });
    } catch (error) {
        const statusCode = error.message === "User already exists" ? 409 : 400;
        res.status(statusCode).json({
            success: false,
            message: error.message,
            errors: null, // Optional for validation errors
        });
    }
};

// login controller

const login = async (req,res)=>{
    const {email,password} = req.body;
    try{
       const {user,token} = await loginUser(email,password);
       res.status(200).json({
        success: true,
        message: "Login successful",
        data: { user, token },
    });
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message,
            errors: null,
        });
    }
};

// Logout user (clear token from client side)
const logout = (req, res) => {
    // Clear token cookie (if using cookies)
    res.clearCookie('token');  // Clear token cookie from client's browser
  
    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  };

module.exports = {register,login,logout};
