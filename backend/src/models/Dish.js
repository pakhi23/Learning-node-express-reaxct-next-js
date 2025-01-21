const mongoose = require('mongoose');
const {generateSlug} = require('../utils/slugGenerator');

const DishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,// extra space ko automatic remove krta he
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
  },
    { timestamps: true });

// Pre-validate hook to generate slug

    DishSchema.pre('validate',function(next){
        if(!this.slug){  // Agar slug already exist nahi karta
       this.slug = generateSlug(this.name); // Dish ka naam slug me convert karke assign karenge       
        }
        next(); // Save operation continue karne ke liye next call karte hain
    });

    

    module.exports  = mongoose.model('Dish',DishSchema);
