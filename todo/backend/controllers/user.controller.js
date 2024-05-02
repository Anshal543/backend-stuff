import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const register = async (req, res, next) => {
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

const login = async (req, res, next) => {

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
        res.cookie('token', token, { httpOnly: true }).json({ message: "Login successfully" });
        // res.status(200).json({ checkUser });
    } catch (error) {
        next(error);
    }

};

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        // const {id} = req.params;

        if (!token) {
            return res.status(401).json({ message: "you dont have any user" })
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(verified.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const { password, ...rest } = user._doc;

        res.status(200).json({ rest });
    }
    catch (error) {
        next(error);
    }

}

const logout = async (req, res, next) => {
    try {
        res.clearCookie('token').json({ message: "Logout successfully" });
    } catch (error) {
        next(error);
    }
}

const updateUserName = async (req, res, next) => {
    try {
        console.log(req.user);
        const { id } = req.params;
        const { name } = req.body;
        console.log(id, name);
        const updatedUser = await User.findByIdAndUpdate(id, { username: name }, { new: true });
        res.status(200).json({ updatedUser });

    } catch (error) {
        next(error);
    }
}

export { register, login, auth,logout,updateUserName };
