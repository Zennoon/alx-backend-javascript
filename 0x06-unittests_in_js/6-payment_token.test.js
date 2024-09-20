const { describe, it } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('Performs asynchronous testing', function (done) {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.have.property('data');
      done();
    });
  });
});
