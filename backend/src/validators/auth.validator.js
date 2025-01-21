const { check, validationResult } = require('express-validator');

// register validation rules

const registerValidation = [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'please enter valid email address').isEmail(),
    check('password', 'password must be atleast 6 characters').isLength({ min: 6 }),
];

const loginValidation = [
    check('email', 'please enter valid email address').isEmail(),
    check('password', 'password required').not().isEmpty(),
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
module.exports = { registerValidation, loginValidation, validate };
