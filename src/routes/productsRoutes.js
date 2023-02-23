const express = require('express');
const { productsController } = require('../controllers');
const { validateName } = require('../middlewares/validateProducts');

const productRouter = express.Router();

productRouter.get('/', productsController.getAll);
productRouter.get('/:id', productsController.getById);

productRouter.post('/', validateName, productsController.insertProduct);
productRouter.put('/:id', validateName, productsController.updateById);
productRouter.delete('/:id', productsController.removeById);

module.exports = productRouter;
