const express = require('express');
const router = express.Router();
const productController = require('./../../controllers/Seller/ProductControllers');


router.get('/:id/product/info',productController.getProduct);
router.get('/:id/product/category/get_variant',productController.getProductVariant);




module.exports = router ;