import bcryptjs from "bcryptjs";
import User from "../Models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const { TOKEN_SECRET } = process.env;


export const register = async ( req, res, next) => {
    try{
        const { email, password} = req.body;

        const userExit = await User.findOne({ email });
        if(userExit){
            return res.status(400).json({
                message: "Email is already in use",
            });
        }

        const salt = bcryptjs.genSaltSync(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const user = await User.create({
            email,
            password: hashPassword,
        });

        user.password = undefined;
        return res.status(201).json({
        message: "Register successfully",
        data: user,
    });
    }catch (error){
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
    
      const { email, password } = req.body;

      const userExist = await User.findOne({ email });
      if (!userExist) {
        return res.status(400).json({
          message: "Email is not found",
        });
      }
  
      const validPassword = await bcryptjs.compare(password, userExist.password);
      if (!validPassword) {
        return res.status(400).json({
          message: "Password is incorrect",
        });
      }
  
   
      const token = jwt.sign({ _id: userExist._id }, TOKEN_SECRET, {
        expiresIn: "1h",
      });
  
      userExist.password = undefined;
      return res.status(200).json({
        message: "Login successfully!",
        token,
        user: userExist,
      });
    } catch (error) {
      next(error);
    }
  };


// export const logout = async (req, res, next) => {}