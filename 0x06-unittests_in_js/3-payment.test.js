const { describe, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  describe('Utils.calculateAmount', function () {
    it('should call the calculateAmount method', function () {
      sinon.spy(Utils, 'calculateNumber');

      sendPaymentRequestToApi(100, 20);

      expect(Utils.calculateNumber.calledOnce).to.equal(true);
      expect(Utils.calculateNumber.firstCall.args).to.eql(['SUM', 100, 20]);
    });
  });
});
