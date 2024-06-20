require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.rout.js');
const Product = require('./models/product.model.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute);

mongoose.connect(process.env.MONGODB_URI, { })
  .then(() => {
    console.log('Connection Successful');
    app.listen(3000, () => {
      console.log('Server Started');
    });
  })
  .catch((err) => {
    console.log(err);
  });
