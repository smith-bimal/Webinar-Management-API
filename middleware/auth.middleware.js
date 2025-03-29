import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

const authenticate = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        token = token.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "Authentication token missing" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        console.log(user)

        if (!user) {
            return res.status(401).json({ message: "No user found" });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token", error });
    }
};

export default authenticate;
