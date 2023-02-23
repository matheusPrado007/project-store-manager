const sinon = require("sinon");
const { expect } = require("chai");

const connection = require("../../../src/models/db/connection");
const { productDataBaseModel } = require("./mock/productModelMock");
const { productsModel } = require("../../../src/models");

describe('Testa a camada model para a rota "/product"', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('Testa a camada model para a função "findAll"', function () {
    it("Busca por todas as pessoas cadastradas", async function () {
      sinon.stub(connection, "execute").resolves([productDataBaseModel]);

      const response = await productsModel.findAll();
      expect(response).to.be.deep.equal(productDataBaseModel);
    });
  });

  describe('Testa a camada model para a função "findById"', function () {
    it("Faz a busca de uma pessoa pelo id", async function () {
      sinon.stub(connection, "execute").resolves([productDataBaseModel]);

      const response = await productsModel.findById(1);
      expect(response).to.be.equal(productDataBaseModel[0]);
    });
  });
});
