import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../Models/User.js";
dotenv.config();

const { TOKEN_SECRET } = process.env;

export const checkPermission = async (req, res, next) => {
  try {
   
    const authorization = req.headers?.authorization;
    if (!authorization) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, TOKEN_SECRET);
    if (!decoded) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }


    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Forbidden",
      });
    }


    next();
  } catch (error) {
    next(error);
  }
};
