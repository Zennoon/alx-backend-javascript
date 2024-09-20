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

describe("Available_payments page", function() {
    it("check correct status for correct url", function() {
	request.get("http://localhost:7865/available_payments", (err, res, body) => {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(res.statusCode).to.equal(200);
	    }
	});
    });
    it("check correct body content for correct url", function() {
	const option = {json: true};
	const payLoad = {
	    payment_methods: {
		credit_cards: true,
		paypal: false
	    }
	}
	request.get("http://localhost:7865/available_payments", option, (err, res, body) => {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(body).to.deep.equal(payLoad);
	    }
	});
    });
});

describe("Login", function() {
    it("check correct status code for request that's sent properly", function(done) {
	const opt = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		userName: 'JOE'
	    }
	};
	request.post(opt, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content for request that's sent properly", function(done) {
	const opts = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		userName: 'JOE'
	    }
	};
	request.post(opts, function(err, res, body) {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(body).to.contain('Welcome JOE');
	    }
	    done();
	});
    });
    it("check correct status code for request that's not sent properly", function(done) {
	const op = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		usame: 'JOE'
	    }
	};
	request.post(op, function(err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
	});
    });
});
