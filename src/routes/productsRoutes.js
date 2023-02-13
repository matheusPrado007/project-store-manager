const express = require('express');
const { productsController } = require('../controllers');

const productRouter = express.Router();

productRouter.get('/', productsController.getAll);
productRouter.get('/:id', productsController.getById);

module.exports = productRouter;