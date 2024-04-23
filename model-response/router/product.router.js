import express from 'express';
import { getProducts, postProduct, getProductsById, deleteProduct, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", getProducts)
router.post("/", postProduct)
router.get("/:id", getProductsById)
router.delete("/:id", deleteProduct)
router.put("/:id", updateProduct)

export default router;