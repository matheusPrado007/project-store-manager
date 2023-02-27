const { salesModel } = require('../models');

const NOT_FOUND = 404;

const getAll = async () => {
  const allProducts = await salesModel.findAll();
  return { type: null, message: allProducts };
};

const getById = async (id) => {
  const hasProduct = await salesModel.findById(id);
  if (!hasProduct.length) return { type: NOT_FOUND, message: 'Sale not found' };

  return { type: null, message: hasProduct };
};

const insertProduct = async (sales) => {
  const id = await salesModel.insertIdSales();
  await Promise.all(sales.map((sale) => salesModel.insertProduct(id, sale)));

  return { type: null, message: { id, itemsSold: sales } };
};

const removeById = async (id) => {
  const hasProduct = await salesModel.findById(id);
  if (hasProduct.length === 0) {
    return { type: NOT_FOUND, message: 'Sale not found' };
  }

  await salesModel.removeById(id);

  return { type: null, message: 'Operação realizada com sucesso!' };
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  removeById,
};
