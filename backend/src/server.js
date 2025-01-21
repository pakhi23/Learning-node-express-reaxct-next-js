const http = require('http');
const app = require('./app'); // Import your Express app
const dotenv = require('dotenv');



// Load environment variables
dotenv.config();

// Define Port
const PORT = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer(app);


// Start the server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
