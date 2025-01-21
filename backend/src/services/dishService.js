    const Dish = require('../models/Dish');
    // Function to check if a dish with the given name already exists
    exports.checkDishExists = async (name) => {
        try {
            //mongooose query to find dish with the given name
            const existingDish = await Dish.findOne({ name });
            return existingDish;// Agar dish milti hai, toh vo return karte hain

        } catch (error) {
            throw new Error('error checkign dish existence');
        }
    };
