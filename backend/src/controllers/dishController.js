const Dish = require('../models/Dish');

const DishService = require('../services/dishService');

const upload = require('../utils/fileUpload');

// Dish create karne ka controller function

exports.createDish = async (req, res) => {
    console.log('File:', req.file); // Check uploaded file
    console.log('Body:', req.body); // Check form data
    try {
        // Image upload ko handle karte hain using multer middleware
     
            // Request body se dish ke details ko destructure kar rahe hain

            const { name, price, description } = req.body;
            // Dish name check kar rahe hain, ki vo already exist na karta ho

            const existingDish = await DishService.checkDishExists(name);

            if (existingDish) {
                return res.status(400).json({ error: 'Dish with this name already exists' });
            }

            // Naya dish object create kar rahe hain, image ko file path ke saath set karte hain

            const dish = new Dish({
                name,
                price,
                image: req.file ? req.file.path : '',// Multer ke through upload ki hui image ka path
                description
            });
            // Dish ko database mein save kar rahe hain
            await dish.save();
            // Success response bhejte hain, slug ko bhi response mein include kar rahe hain
            return res.status(201).json({ message: 'Dish created successfully', dish: { ...dish.toObject(), slug: dish.slug } });
    
    } catch (error) {
        // Agar koi error hota hai to catch block execute hoga
        console.error(error);       
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}


