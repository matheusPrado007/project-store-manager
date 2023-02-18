const connection = require('./db/connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products',
  );
  return result;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products WHERE sale_id = ?',
    [productId],
  );
  return product;
};

const insertIdSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE (NOW())',
  );
  return insertId;
};

const insertProduct = async (saleId, { productId, quantity }) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)',
    [saleId, productId, quantity],
  );
};

module.exports = {
  findAll,
  findById,
  insertProduct,
  insertIdSales,
};
