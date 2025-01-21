const { body, validationResult } = require('express-validator');  // express-validator ko import karte hain

// Validate dish create request body
const validateDishCreate = [
    body('name').notEmpty().withMessage('Dish name is required'), // Dish name required hona chahiye
    body('name').isLength({ max: 100 }).withMessage('Dish name cannot be more than 100 characters'), // Dish name ka length 100 se zyada nahi hona chahiye
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'), // Price ko positive float hona chahiye
    body('description').notEmpty().withMessage('Description is required'), // Description bhi required hai
    body('image').custom((value, { req }) => { // Custom validation for image
        if (!req.file) {
            throw new Error('Image is required');
        }
        return true;
    }),

];
const validate = (req, res, next) => {
    const errors = validationResult(req);

    // Check if there are validation errors
    if (!errors.isEmpty()) {
        // Create an object to hold errors by field names
        const formattedErrors = {};

        // Format the errors to be in the structure: { field: message }
        errors.array().forEach(error => {
            formattedErrors[error.path] = error.msg; // Map field to error message
        });

        // Send the response with the formatted errors
        return res.status(400).json({
            success: false,
            message: "Required fields are missing",  // Custom message
            errors: formattedErrors,  // Return errors as an object
        });
    }

    next();  // Continue to the next middleware or controller if validation passes
};

module.exports = { validateDishCreate, validate };