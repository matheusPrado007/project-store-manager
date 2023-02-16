const express = require('express');
const { productsController } = require('../controllers');
const { validateName } = require('../middlewares/validateProducts');

const productRouter = express.Router();

productRouter.get('/', productsController.getAll);
productRouter.get('/:id', productsController.getById);

productRouter.post('/', validateName, productsController.insertProduct);

module.exports = productRouter;