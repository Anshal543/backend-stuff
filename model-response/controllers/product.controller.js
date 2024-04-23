import { Product } from "../models/product.model.js";


const getProducts = async (req, res) => {

    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            data: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const postProduct = async (req, res) => {
    try {
        // const { name, price } = req.body;
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            data: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getProductsById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            data: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            // runValidators:true
        });
        res.status(200).json({
            success: true,
            data: product
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export { getProducts, postProduct, getProductsById, deleteProduct, updateProduct }