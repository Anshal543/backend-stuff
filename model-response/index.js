import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { Product } from './models/product.model.js';
import express from 'express';

dotenv.config({
    path:"./.env"
});


connectDB();

const app = express();
app.use(express.json());

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})

app.get("/",async(req,res)=>{

    try {
        const products = await Product.find();
        res.status(200).json({
            success:true,
            data:products
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
})

app.post("/",async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success:true,
            data:product
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
})







