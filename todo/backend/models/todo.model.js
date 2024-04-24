import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    category:{
        type: String,
        required: true
    }
    
});


export const Todo = mongoose.model("Todo", todoSchema);