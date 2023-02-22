const camelize = require('camelize');
const connection = require('./db/connection');

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT P.sale_id, S.date, P.product_id, P.quantity 
      FROM StoreManager.sales AS S
      INNER JOIN StoreManager.sales_products AS P
      ON P.sale_id = S.id
      ORDER BY P.sale_id, P.product_id;`,
  );
  return camelize(result);
};

const findById = async (id) => {
  const [result] = await connection.execute(
    `SELECT S.date, P.product_id, P.quantity
      FROM StoreManager.sales AS S
      INNER JOIN StoreManager.sales_products AS P
      ON P.sale_id = S.id
      WHERE S.id = (?)`,
    [id],
  );
  return camelize(result);
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
