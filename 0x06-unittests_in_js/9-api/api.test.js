const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('request');

describe('IndexRoute', function() {
  it('should return 200 status code', function(done) {
	  request('http://localhost:7865/', function(err, res) {
	    expect(res.statusCode).to.equal(200);
	    done();
	  });
  });
  it('should return correct output', function(done) {
	  request('http://localhost:7865/', function(err, res, body) {
	    expect(body).to.contain('Welcome to the payment system');
	    done();
  	});
  });
  it('should contain correct header', function(done) {
	  request('http://localhost:7865/', function(err, res) {
	    expect(res.headers['content-length']).to.equal('29');
	    done();
	  });
  });
});

describe('CartRoute', function() {
  it('should return 200 status code', function(done) {
	  request.get('http://localhost:7865/cart/1', function(err, res) {
	    expect(res.statusCode).to.equal(200);
	    done();
	  });
  });
  it('should return correct output', function(done) {
	  request.get('http://localhost:7865/cart/1', function(err, res, body) {
	    expect(body).to.contain('Payment methods for cart 1');
	    done();
	  });
  });
  it('should return 404 (since invalid param given)', function(done) {
	  request.get('http://localhost:7865/cart/notNum', function(err, res) {
	    expect(res.statusCode).to.equal(404);
	    done();
	  });
  });
});
