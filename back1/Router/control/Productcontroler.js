// smart watches



const product = require('../control/productdb'); // Ensure this points to your product model
const { validationResult } = require('express-validator'); // Validation import

async function getAllProducts(req, res) {
    try {
        const data = await product.find();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error");
    }
}
async function getmyproduct(req,res) {
    try {
        let id=req.headers.id;
        console.log(id);
        const data = await product.findById(id);
        res.status(200).json(data);
    } catch(error){
        console.error(error);

    }
    
}
async function createProducts(req, res) {
    const data = req.body;

    // Validate request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check for existing product
        let existingProduct = await product.findOne({ title: data.title });
        if (existingProduct) {
            return res.status(400).json({
                message: "Product already exists",
            });
        }

        // Create new product
        let newProduct = await product.create(data); // Corrected to use `data` instead of `existingProduct`
        res.status(201).json({
            success:true,
            data:{newProduct}});
    } catch (error) {
        console.error(error);
        res.status(500).json("Error creating product");
    }
}

async function updateProducts(req, res) {
    const { id } = req.params; // Assuming you have an ID in the URL
    const updates = req.body;

    try {
        const updatedProduct = await product.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedProduct) {
            return res.status(404).send("Product not found");
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json("Error updating product");
    }
}

async function deleteProducts(req, res) {
    const { id } = req.params; // Assuming you have an ID in the URL

    try {
        const deletedProduct = await product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).send("Product not found");
        }
        res.status(200).send("Product deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).json("Error deleting product");
    }
}

module.exports = {
    getAllProducts,
    getmyproduct,
    createProducts,
    updateProducts,
    deleteProducts
};
