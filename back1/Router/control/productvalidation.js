const {body}=require('express-validator');
let product_middlewar=[
    body("title")
    .notEmpty()
    .withMessage("product name must not be empty")
    .isLength()
    .withMessage(" product name length should be between 3 and 15 characters"),
    
]
module.exports=product_middlewar;