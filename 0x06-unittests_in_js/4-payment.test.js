const { describe, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  describe('Utils.calculateAmount', function () {
    it('should call the calculateAmount method', function () {
      const calculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);

      sinon.spy(console, 'log');
      sendPaymentRequestToApi(100, 20);

      expect(calculateNumber.calledOnce).to.equal(true);
      expect(calculateNumber.firstCall.args).to.eql(['SUM', 100, 20]);
      expect(console.log.calledOnce).to.equal(true);
      expect(console.log.firstCall.args[0]).to.equal('The total is: 10');
    });
  });
});
