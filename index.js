import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/index.js";
import cors from "cors";

dotenv.config();
const app = express();

const { PORT, DB_URI } = process.env;

app.use(cors());
app.use(express.json());

await mongoose.connect(DB_URI).then(() => {
    console.log("connect to database successfully");
});

app.use("/api", router);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
  app.use((err, req, res, next) => {
    return res.status(500).json({
      name: err.name,
      message: err.message,
    });
  });


app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
  });