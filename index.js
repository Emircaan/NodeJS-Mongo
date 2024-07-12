import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import { router } from "./routes/product.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks", router);

try {
  await mongoose.connect(process.env.MONGODB_URI, {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
    connectTimeoutMS: 1000,
  });

  console.log("Connection Successful");
  app.listen(process.env.PORT ?? 3000, () => {
    console.log("Server Started", process.env.PORT ?? 3000);
  });
} catch (error) {
  console.log(error);
}
