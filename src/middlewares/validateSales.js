const STATUS_BAD_REQUEST = 400;
const STATUS_UNPROCESSABLE = 422;
const STATUS_NOT_FOUND = 404;

const { productsServices } = require('../services');

const validateQuantity = async (req, res, next) => {
  const sales = req.body;

  const quantity = sales.find((e) => e.quantity);
  const quantityLessThanZero = sales.find((e) => e.quantity <= 0);

  if (quantityLessThanZero) {
    return res
      .status(STATUS_UNPROCESSABLE)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (!quantity) {
    return res
      .status(STATUS_BAD_REQUEST)
      .json({ message: '"quantity" is required' });
  }

  return next();
};

const validateProducts = async (req, res, next) => {
  const sales = req.body;
  const allProducts = await productsServices.getAll();

  for (let index = 0; index < sales.length; index += 1) {
    if (!sales[index].productId) {
      return res
        .status(STATUS_BAD_REQUEST)
        .json({ message: '"productId" is required' });
    }

    const product = allProducts.message.find(
      (item) => item.id === sales[index].productId,
    );
    if (!product) {
      return res
        .status(STATUS_NOT_FOUND)
        .json({ message: 'Product not found' });
    }
  }

  next();
};

module.exports = {
  validateProducts,
  validateQuantity,
};
