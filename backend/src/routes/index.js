const express = require('express');
const router = express.Router();
const authRouters = require('./auth.routes');
const dishRoutes = require('./dishRoutes');



router.use('/api/auth', authRouters); // Route for authentication
router.use('/api/dishes',dishRoutes);



module.exports = router;
