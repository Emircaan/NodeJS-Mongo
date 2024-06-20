const express = require("express")
const productController = require("../controllers/product.controller")
const Product = require("../models/product.model")
const router = express.Router()

router.get('/' , productController.getProducts)
router.get('/:id' , productController.getProduct)
router.post('/' , productController.createProduct)
router.put('/:id' , productController.updateProduct)
router.delete('/:id' , productController.deleteProduct)

module.exports = router