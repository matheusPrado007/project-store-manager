const { productsModel } = require('../models');

const NOT_FOUND = 404;

const getAll = async () => {
  const allProducts = await productsModel.findAll();
  return { type: null, message: allProducts };
};

const getById = async (id) => {
  const hasProduct = await productsModel.findById(id);
  if (!hasProduct) {
    return { type: NOT_FOUND, message: 'Product not found' };
  }

  await productsModel.findById(id);
  return { type: null, message: hasProduct };
};

const insertProduct = async (name) => {
  const newProductId = await productsModel.insertProduct(name);
  const newProduct = await productsModel.findById(newProductId);

  if (!newProduct) return { type: NOT_FOUND, message: 'Product not insert' };
  return { type: null, message: newProduct };
};

module.exports = {
  getAll,
  getById,
  insertProduct,
};
