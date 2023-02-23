const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);
const { allData } = require("./mock/salesControllerMock");
const { salesController } = require("../../../src/controllers");
const { salesService } = require("../../../src/services");

const INTERNAL_SERVER_ERROR = 500;
const OK = 200;
const NOT_FOUND = 404;

describe('Testa a camada controller para a rota "/sales"', function () {
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
        .stub(salesService, "getAll")
        .resolves({ type: null, message: allData });

      await salesController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(OK);
      expect(res.json).to.have.been.calledWith(allData);
    });

    it("Erro 500 INTERNAL_SERVER_ERROR - getAll", async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(salesService, "getAll")
        .resolves({ type: INTERNAL_SERVER_ERROR, message: allData });

      await salesController.getAll(req, res);

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
        .stub(salesService, "getById")
        .resolves({ type: null, message: allData[0] });

      await salesController.getById(req, res);

      expect(res.status).to.have.been.calledWith(OK);
      expect(res.json).to.have.been.calledWith(allData[0]);
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
        .stub(salesService, "getById")
        .resolves({ type: NOT_FOUND, message: "sale not found" });

      await salesController.getById(req, res);

      expect(res.status).to.have.been.calledWith(NOT_FOUND);
      expect(res.json).to.have.been.calledWith({
        message: "sale not found",
      });
    });
  });
});
