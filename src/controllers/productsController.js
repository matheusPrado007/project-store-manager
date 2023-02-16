const { productsServices } = require('../services');

const INTERNAL_SERVER_ERROR = 500;
const OK = 200;
const CREATE_SUCCESS = 201;

const getAll = async (_req, res) => {
  const { type, message } = await productsServices.getAll();

  if (type) return res.status(INTERNAL_SERVER_ERROR).json(message);

  return res.status(OK).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.getById(id);

  if (type) return res.status(type).json({ message });

  return res.status(OK).json(message);
};

const insertProduct = async (req, res) => {
  const name = req.body;
  const { type, message } = await productsServices.insertProduct(name);

  if (type) return res.status(type).json({ message });
  return res.status(CREATE_SUCCESS).json(message);
};

module.exports = {
  getAll,
  getById,
  insertProduct,
};
