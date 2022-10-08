const express = require('express');
const router = express.Router();
const apiController = require('../controllers/ProductControllers');


router.post('/',apiController.store);
router.get('/:id',apiController.read);
router.delete('/:id',apiController.delete);
router.get('/variant',apiController.readVariant);
module.exports = router ;