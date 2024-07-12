import { TaskModel } from "../models/product.model.js";

export const getAllTasks = async (req, res) => {
  try {
    const Products = await TaskModel.find({});
    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await TaskModel.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await TaskModel.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const product = await TaskModel.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
