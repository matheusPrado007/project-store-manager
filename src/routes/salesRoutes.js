const express = require('express');
const { salesController } = require('../controllers');
const {
  validateProducts,
  validateQuantity,
} = require('../middlewares/validateSales');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getAll);
salesRouter.get('/:id', salesController.getById);

salesRouter.post(
  '/',
  validateProducts,
  validateQuantity,
  salesController.insertProduct,
);
salesRouter.delete('/:id', salesController.removeById);

module.exports = salesRouter;
