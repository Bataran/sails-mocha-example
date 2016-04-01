var assert = require('assert');

describe('UserModel', function() {

  describe('#find()', function() {
    it('should not be empty', function (done) {
      User.find()
      .then(function(results) {
        assert.notEqual(results.length, 0);
        done();
      })
      .catch(done);
    });
  });

});