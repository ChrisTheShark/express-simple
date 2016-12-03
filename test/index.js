'use strict';
const expect = require('chai').expect,
    supertest = require('supertest'),
    compose = require('../index');

describe('index', function() {

    it('should export a simple route from manifest at /api/awesome', function(done) {
        compose(function(error, app) {
            supertest(app)
                .get('/api/awesome')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(error, response) {
                    expect(response.body).to.deep.equal({
                        success: 'Super!'
                    });
                    done();
                });
        });
    });

    it('should expose the greetingRoute at /greeting/hello', function(done) {
        let expectedTemplate = '<html><head><title>My Application</title>' +
            '</head><body><h1>Hello World!</h1></body></html>';

        compose(function(error, app) {
            supertest(app)
                .get('/greeting/hello')
                .expect('Content-Type', /html/)
                .expect(200)
                .end(function(error, response) {
                    expect(response.text).to.equal(expectedTemplate);
                    done();
                });
        });
    });

});
