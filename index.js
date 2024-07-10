import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import { router } from "./routes/product.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks", router);

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log("Connection Successful");
    app.listen(3000, () => {
      console.log("Server Started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
