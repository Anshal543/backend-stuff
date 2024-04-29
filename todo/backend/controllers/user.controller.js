import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const createUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const uniqueUser = await User.find({ username })
        if (uniqueUser.length > 0) {
            return res.status(400).json({ message: "User already exists" })
        }
        const uniqueEmail = await User.find({ email })
        if (uniqueEmail.length > 0) {
            return res.status(400).json({ message: "Email already exists" })
        }
        const hashedPassword = bcrypt.hashSync(password, 10);

        const user = await User.create({ username, email, password: hashedPassword, isAdmin: false });
        res.status(201).json({ user });
    } catch (error) {
        next(error);
    }
};

const getUsers = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const checkUser = await User.find({ email })  //find return array, findOne return object
        if (!checkUser) {
            return res.status(400).json({ message: "User not found, please register" })
        }
        const validPassword = bcrypt.compareSync(password, checkUser[0].password);
        if (!validPassword) {
            return res.status(400).json({ message: "Invalid password" })
        }
        const token = jwt.sign({ id: checkUser[0]._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.cookie('token', token, { httpOnly: true }).json({ user: checkUser[0] });
        // res.status(200).json({ checkUser });
    } catch (error) {
        next(error);
    }

};

export { createUser, getUsers };
