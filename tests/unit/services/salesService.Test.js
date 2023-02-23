const sinon = require("sinon");
const { expect } = require("chai");

const { salesService } = require("../../../src/services");
const { salesModel } = require("../../../src/models");
const { allData, getById } = require("./mock/salesServiceMock");

const NOT_FOUND = 404;

describe('Testa a camada service para a rota "/sales"', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('Testa a camada service para a função "getAll"', function () {
    it("Busca por todas as pessoas cadastradas", async function () {
      const result = { type: null, message: allData };

      sinon.stub(salesModel, "findAll").resolves(allData);

      const response = await salesService.getAll(allData);

      expect(response).to.be.deep.equal(result);
    });
  });

  describe('Testa a camada service para a função "getById"', function () {
    it("Busca por todas as pessoas cadastradas pelo id", async function () {
      const result = { type: null, message: getById };

      sinon.stub(salesModel, "findById").resolves(getById);

      const response = await salesService.getById(1);

      expect(response).to.be.deep.equal(result);
    });
  });

  describe('Testa a camada service para a função "getById" Erro 404', function () {
    it("ERRO 404 ", async function () {
      const result = { type: NOT_FOUND, message: "Sale not found" };

      sinon.stub(salesModel, "findById").resolves(!getById);

      const response = await salesService.getById("A");

      expect(response).to.be.deep.equal(result);
    });
  });
});
