const calculateNumber = require('./2-calcul_chai');
const { describe, it } = require('mocha');
const chai = require('chai');

const expect = chai.expect;

describe('calculateNumber', function () {
  describe('sum', function () {
    const type = 'SUM';
    it('should return the sum of two args', function () {
      expect(calculateNumber(type, 1.1, 2.6)).to.equal(4);
    });
  });
  describe('subtract', function () {
    const type = 'SUBTRACT';
    it('should return the difference of two args', function () {
      expect(calculateNumber(type, 1.1, 2.6)).to.equal(-2);
    });
  });
  describe('divide', function () {
    const type = 'DIVIDE';
    it('should return the quotient of two args', function () {
      expect(calculateNumber(type, 1.1, 3.6)).to.equal(0.25);
    });

    it('should notify of an error on zero division attempt', function () {
      expect(calculateNumber(type, 4, 0.3)).to.equal('Error');
    });
  });
});
