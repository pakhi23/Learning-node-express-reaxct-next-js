const express = require('express');
const router = express.Router();
const dishController= require('../controllers/dishController');
const {validateDishCreate,validate} = require('../validators/dishValidator');
const configureMulter = require('../utils/fileUpload');
const upload = configureMulter('dishes'); // Specify the folder name


router.post('/create', upload.single('image'),validateDishCreate, validate,dishController.createDish);  // Create dish route, validation aur controller ko call karega

module.exports = router;
