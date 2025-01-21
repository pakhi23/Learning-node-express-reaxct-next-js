
const express = require('express');
const bodyParser = require('body-parser'); // Use body parser to parse incoming data
const connectDB = require('./config/db'); // MongoDB connection import
const routes = require('./routes'); // Main Routes File
const cors = require('cors');
const path = require('path');


// MongoDB se connect hora h
connectDB(); // MongoDB connection function call

const app = express(); // Express app initialization
app.use(express.json());  // For parsing application/json
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded data

// Middleware for serving static files
app.use(express.static(path.join(__dirname, '../public')));

console.log("Serving static files from:", path.join(__dirname, 'public'));


// Allow specific origin
const corsOptions = {
    origin: 'http://localhost:3001', // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  };
  
  // Apply CORS middleware
  app.use(cors(corsOptions));
  





// / Routes
app.use('/', routes); // All Routes (API + Views)


// Export App
module.exports = app;