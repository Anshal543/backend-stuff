import express from "express";
import { register,login,auth,logout,updateUserName } from "../controllers/user.controller.js";
import { userVerification } from "../middlewares/userVerification.js";


const router = express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/auth",auth)
router.get("/logout",logout)
router.put("/:id",userVerification,updateUserName)



export default router;