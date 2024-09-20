const calculateNumber = require('./0-calcul');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('CalculateNumber', function () {
  describe('calculateNumber', function () {
    it('should return rounded sum of two numbers', function () {
      assert.equal(calculateNumber(1, 2), 3);
      assert.equal(calculateNumber(1.1, 2.2), 3);
      assert.equal(calculateNumber(1.6, 2.6), 5);
      assert.equal(calculateNumber(1.5, 2.5), 5);
      assert.equal(calculateNumber(1.4, 2.6), 4);
      assert.equal(calculateNumber('1', '2.5'), 4);
    });

    it('should return NaN', function () {
      assert.equal(isNaN(calculateNumber('a', 'b')), true);
    });

    it('just a wierd case', function () {
      assert.equal(calculateNumber([1], [2]), 3);
    });
  });
});
