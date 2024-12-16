const Air = require('../airpodesdata/Data'); // Ensure this points to your product model
const { validationResult } = require('express-validator'); // Validation import


async function Airproduct(req, res) {
    try {
        const data = await Air.find();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error");
    }
}
async function singleproduct(req, res) {
    try {
      let id = req.headers.id;
        

        // Validate the ID format if necessary (assuming it's a MongoDB ObjectID)
      
        const data = await Air.findById(id);


        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
}



async function Aircreate(req, res) {
    const data = req.body;

    // Validate request data
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    try {
        // Check for existing product
        let existingProduct = await Air.findOne({ title: data.title });
        if (existingProduct) {
            return res.status(400).json({
                message: "Product already exists",
            });
        }

        // Create new product
        let newProduct = await Air.create(data); // Corrected to use `data` instead of `existingProduct`
        res.status(201).json({
            success:true,
            data:{newProduct}});
    } catch (error) {
        console.error(error);
        res.status(500).json("Error creating product");
    }
}

async function Airupdate(req, res) {
    const { id } = req.params; // Assuming you have an ID in the URL
    const updates = req.body;

    try {
        const updatedProduct = await Air.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedProduct) {
            return res.status(404).send("Product not found");
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json("Error updating product");
    }
}

async function Airdelete(req, res) {
    const { id } = req.params; // Assuming you have an ID in the URL

    try {
        const deletedProduct = await Air.findByIdAndDelete(id);
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
   Airproduct,Aircreate,Airdelete,Airupdate,singleproduct
};
