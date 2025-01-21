const mongoose = require('mongoose'); // mongoose for MongoDB interaction
const dotenv = require('dotenv');

dotenv.config();

// Async function to connect to MongoDB
const connectDB = async () => {
    try {
        // Remove deprecated options
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error:', err.message); // Log the error message
        process.exit(1); // Exit the application if connection fails
    }
};

module.exports = connectDB;



