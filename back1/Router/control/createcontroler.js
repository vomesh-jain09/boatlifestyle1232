// neckband


const producted = require('../control/createdb'); // Ensure this points to your product model
const { validationResult } = require('express-validator'); // Validation import

const product = require('../control/productdb');


async function getmyProducts(req, res) {
    try {
        const data = await producted.find();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error");
    }
}
async function getmyProduct(req, res) {
    try {
   
        let id = req.headers.id;
        let data = await producted.findById(id);
     
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error");
    }
}

async function created(req, res) {
    const data = req.body;

    // Validate request data
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    try {
        // Check for existing product
        let existingProduct = await producted.findOne({ title: data.title });
        if (existingProduct) {
            return res.status(400).json({
                message: "Product already exists",
            });
        }

        // Create new product
        let newProduct = await producted.create(data); // Corrected to use `data` instead of `existingProduct`
        res.status(201).json({
            success:true,
            data:{newProduct}});
    } catch (error) {
        console.error(error);
        res.status(500).json("Error creating product");
    }
}

async function updated(req, res) {
    const { id } = req.params; // Assuming you have an ID in the URL
    const updates = req.body;

    try {
        const updatedProduct = await producted.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedProduct) {
            return res.status(404).send("Product not found");
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json("Error updating product");
    }
}

async function deleted(req, res) {
    const { id } = req.params; // Assuming you have an ID in the URL

    try {
        const deletedProduct = await producted.findByIdAndDelete(id);
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
   getmyProducts,
   getmyProduct,
   created,
   updated,
   deleted
};
