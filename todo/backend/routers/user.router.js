import express from "express";
import { createUser,getUsers,getVerifyUser } from "../controllers/user.controller.js";


const router = express.Router();

router.post("/register",createUser)
router.post("/login",getUsers)
router.get("/verify",getVerifyUser)


export default router;