import dotenv from 'dotenv';
import connectDB from './db/index.js';
import express from 'express';
import productRouter from './router/product.router.js';

dotenv.config({
    path: "./.env"
});

connectDB();

const app = express();
app.use(express.json());
app.use("/products", productRouter)


app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})









