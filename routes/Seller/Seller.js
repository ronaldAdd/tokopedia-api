const express = require('express');
const router = express.Router();
const productController = require('./../../controllers/Seller/ProductControllers');


router.get('/:id/product/info',productController.getProduct);
router.get('/:id/product/category/get_variant',productController.getProductVariant);
router.post('/:id/product/create',productController.create);
router.patch('/:id/product/edit',productController.edit);
router.get('/:id/product/status/:upload_id',productController.uploadStatus);
router.post('/:id/product/active',productController.active);
router.post('/:id/product/inactive',productController.inActive);
router.post('/:id/product/price/update',productController.setPriceOnly);
router.post('/:id/product/stock/update',productController.setStockOnly);
router.delete('/:id/product',productController.deleteProductById);


module.exports = router ;