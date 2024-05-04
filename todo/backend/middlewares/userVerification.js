import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const userVerification = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "You are not authenticated" });
        }
         jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            const users = await User.findById(decoded.id);
            console.log("user");
            req.user = users;
            console.log("user1");
            next();
        });

    }
    catch (error) {
        next(error);
    }
}

export  { userVerification}
