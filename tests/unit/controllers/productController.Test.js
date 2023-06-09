const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);
const {
  productDataBase,
  productDataId,
} = require("./mock/productControllerMock");
const { productsController } = require("../../../src/controllers");
const { productsServices } = require("../../../src/services");

const INTERNAL_SERVER_ERROR = 500;
const OK = 200;
const NOT_FOUND = 404;

describe('Testa a camada controller para a rota "/products"', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('Testa a camada controller para a função "getAll e getById"', function () {
    it("Busca por todos as produtos cadastradas - getAll", async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productsServices, "getAll")
        .resolves({ type: null, message: productDataBase });

      await productsController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(OK);
      expect(res.json).to.have.been.calledWith(productDataBase);
    });

    it("Erro 500 INTERNAL_SERVER_ERROR - getAll", async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productsServices, "getAll")
        .resolves({ type: INTERNAL_SERVER_ERROR, message: productDataBase });

      await productsController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(INTERNAL_SERVER_ERROR);
      expect(res.json).to.have.been.calledWith();
    });

    it("Busca por todos as produtos cadastradas por um id - getById", async function () {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productsServices, "getById")
        .resolves({ type: null, message: productDataId });

      await productsController.getById(req, res);

      expect(res.status).to.have.been.calledWith(OK);
      expect(res.json).to.have.been.calledWith(productDataId);
    });

    it("'Erro' id invalido - getById", async function () {
      const req = {
        params: {
          id: "z",
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productsServices, "getById")
        .resolves({ type: NOT_FOUND, message: "Product not found" });

      await productsController.getById(req, res);

      expect(res.status).to.have.been.calledWith(NOT_FOUND);
      expect(res.json).to.have.been.calledWith({
        message: "Product not found",
      });
    });
  });
});
