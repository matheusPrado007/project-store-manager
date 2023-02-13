const { productsServices } = require('../services');

const INTERNAL_SERVER_ERROR = 500;
const OK = 200;

const getAll = async (_req, res) => {
  const { type, message } = await productsServices.getAll();

  if (type) return res.status(INTERNAL_SERVER_ERROR).json(message);

  res.status(OK).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.getById(id);

  if (type) return res.status(type).json({ message });

  res.status(OK).json(message);
};

module.exports = {
  getAll,
  getById,
};
