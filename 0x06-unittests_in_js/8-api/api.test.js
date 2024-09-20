const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('request');

describe('Index page', function() {
  it('should return 200 status code', function(done) {
	  request('http://localhost:7865/', function(err, res, body) {
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
	  request('http://localhost:7865/', function(err, res, body) {
	    expect(res.headers['content-length']).to.equal('29');
	    done();
	  });
  });
});