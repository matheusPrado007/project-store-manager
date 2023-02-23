const sinon = require("sinon");
const { expect } = require("chai");

const { productsServices } = require("../../../src/services");
const { productsModel } = require("../../../src/models");
const { productDataBaseService } = require("./mock/productServiceMock");

const NOT_FOUND = 404;

describe('Testa a camada service para a rota "/product"', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('Testa a camada service para a função "getAll"', function () {
    it("Busca por todas as pessoas cadastradas", async function () {
      const result = { type: null, message: productDataBaseService };

      sinon.stub(productsModel, "findAll").resolves(productDataBaseService);

      const response = await productsServices.getAll(productDataBaseService);

      expect(response).to.be.deep.equal(result);
    });
  });

  describe('Testa a camada service para a função "getById"', function () {
    it("Busca por todas as pessoas cadastradas pelo id", async function () {
      const result = { type: null, message: productDataBaseService[0] };

      sinon.stub(productsModel, "findById").resolves(productDataBaseService[0]);

      const response = await productsServices.getById(1);

      expect(response).to.be.deep.equal(result);
    });
  });

  describe('Testa a camada service para a função "getById" Erro 404', function () {
    it("ERRO 404 ", async function () {
      const result = { type: NOT_FOUND, message: "Product not found" };

      sinon.stub(productsModel, "findById").resolves(!productDataBaseService);

      const response = await productsServices.getById("A");

      expect(response).to.be.deep.equal(result);
    });
  });
});
