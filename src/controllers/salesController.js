const { salesService } = require('../services');

const INTERNAL_SERVER_ERROR = 500;
const OK = 200;
const CREATE_SUCCESS = 201;
const NO_CONTENT = 204;

const getAll = async (_req, res) => {
  const { type, message } = await salesService.getAll();

  if (type) return res.status(INTERNAL_SERVER_ERROR).json(message);

  return res.status(OK).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getById(Number(id));

  if (type) return res.status(type).json({ message });
  return res.status(OK).json(message);
};

const insertProduct = async (req, res) => {
  const sales = req.body;
  const { type, message } = await salesService.insertProduct(sales);
  if (type) return res.status(type).json(message);
  return res.status(CREATE_SUCCESS).json(message);
};

const removeById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.removeById(Number(id));
  if (type) return res.status(type).json({ message });

  return res.status(NO_CONTENT).json(message);
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  removeById,
};
