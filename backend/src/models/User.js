const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// user schema define krre he
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }
);


// password hashing before saving
userSchema.pre('save', async function (next) { // save hone se phle se function run hoga
    if (!this.isModified('password')) return next(); // agar passwrod modify nahi hua he to agle middlware pae jao

    const salt = await bcrypt.genSalt(10); // storng password ke liye salt generate kr rhe he
    this.password = await bcrypt.hash(this.password, salt); // password ko hash kr rhe he salt ke sath
    next(); // next middleware ko call krte he
});

// compare method to check password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password); // entered password ko hash se compare kr rhe he
};

module.exports = mongoose.model('User',userSchema);
