import { Router } from "express";
import userRouter from "./User.js";
import authRouter from "./Auth.js";

const router = Router();


router.use("/users", userRouter);
router.use("/auth", authRouter);

export default router;
