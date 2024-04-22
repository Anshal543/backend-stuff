import mongoose from "mongoose";

const connectDB = async()=>{
    try {

        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connection successfull",connect.connection.host);
        
    } catch (error) {
        console.log("mongodb connection failed",error);
        process.exit(1);
    }
}

export default connectDB;