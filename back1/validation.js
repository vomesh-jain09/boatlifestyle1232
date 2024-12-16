const { body } = require('express-validator');

let validation_middleware = [
    body("name")
        .notEmpty()
        .withMessage("User name must not be empty")
        .isLength()
        .withMessage("Nam, max: 15 }e length should be between 3 and 15 characters"),
         

    body("email")
        .notEmpty()
        .withMessage("Email must not be empty")
        .isEmail()
        .withMessage("Email should be valid"),
        

    body("password")
        .notEmpty()
        .withMessage("Password must not be empty")
        .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })
        .withMessage("Password should be strong and contain at least 8 characters, including uppercase, lowercase, numbers, and symbols.")
];

module.exports = validation_middleware;
