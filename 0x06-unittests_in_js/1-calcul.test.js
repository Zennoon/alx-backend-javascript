const calculateNumber = require('./1-calcul');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('calculateNumber', function () {
  describe('sum', function () {
    const type = 'SUM';
    it('should return the sum of two args', function () {
      assert.equal(calculateNumber(type, 1.1, 2.6), 4);
    });
  });
  describe('subtract', function () {
    const type = 'SUBTRACT';
    it('should return the difference of two args', function () {
      assert.equal(calculateNumber(type, 1.1, 2.6), -2);
    });
  });
  describe('divide', function () {
    const type = 'DIVIDE';
    it('should return the quotient of two args', function () {
      assert.equal(calculateNumber(type, 1.1, 3.6), 0.25);
    });

    it('should notify of an error on zero division attempt', function () {
      assert.equal(calculateNumber(type, 4, 0.3), 'Error');
    });
  });
});
