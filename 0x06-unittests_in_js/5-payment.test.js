const { describe, it, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  beforeEach('Wraps the console.log function for inspection', function () {
    sinon.spy(console, 'log');
  });
  it('should log the right output', function () {
    sendPaymentRequestToApi(100, 20);

    expect(console.log.calledOnce).to.equal(true);
    expect(console.log.firstCall.args[0]).to.equal('The total is: 120');
  });

  it('should log the right output', function () {
    sendPaymentRequestToApi(10, 10);

    expect(console.log.calledOnce).to.equal(true);
    expect(console.log.firstCall.args[0]).to.equal('The total is: 20');
  });
  afterEach('restore spy after each test', function () {
    console.log.restore();
  });
});
