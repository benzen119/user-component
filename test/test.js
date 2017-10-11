const assert = require('assert');
const request = require('superagent');
// require('../src/app')

let URL = 'http://localhost:3000';

describe('Testing an HTTP Response', function () {
    
      it('should have a status code 200', function (done) {
    
        request
          .get(URL)
          .end(function (err, response) {
    
            assert.equal(response.status, 200);
            done();
    
          });
    
      });
    
    });
