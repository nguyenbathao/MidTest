import { Router } from "express";
import { login, register } from "../Controllers/Auth.js";
import { validateLogin, validateRegister } from "../Middlewares/validAuth.js";

const authRouter = Router();

authRouter.post("/register", validateRegister, register);
authRouter.post("/login", validateLogin, login);

export default authRouter;
