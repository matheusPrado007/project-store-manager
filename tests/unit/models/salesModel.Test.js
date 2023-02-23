const sinon = require("sinon");
const { expect } = require("chai");

const connection = require("../../../src/models/db/connection");
const { allData, getById } = require("./mock/salesModelMock");
const { salesModel } = require("../../../src/models");

describe('Testa a camada model para a rota "/sales"', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('Testa a camada model para a função "findAll"', function () {
    it("Busca por todas as pessoas cadastradas", async function () {
      sinon.stub(connection, "execute").resolves([allData]);

      const response = await salesModel.findAll();

      expect(response).to.be.deep.equal(allData);
    });
  });

  describe('Testa a camada model para a função "findById"', function () {
    it("Faz a busca de uma pessoa pelo id", async function () {
      sinon.stub(connection, "execute").resolves([getById]);

      const response = await salesModel.findById(1);

      expect(response).to.be.deep.equal(getById);
    });
  });
});
