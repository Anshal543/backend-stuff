import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const userVerification = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "You are not authenticated" });
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            const users = User.findById(user.id);
            req.user = users;
            next();
        });

    }
    catch (error) {
        next(error);
    }
}

export  { userVerification}
