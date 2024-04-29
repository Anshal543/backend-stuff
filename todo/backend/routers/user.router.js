import express from "express";
import { createUser,getUsers } from "../controllers/user.controller.js";


const router = express.Router();

router.post("/register",createUser)
router.post("/login",getUsers)


export default router;