var request = require('supertest');

describe('UserController', function() {

  describe('#create()', function() {
    it('should create user and return 201', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({
          "name": "Mitar Milanovic",
          "email": "milanovic.mitar@gmail.com",
          "city": "Belgrade",
          "country": "Serbia"
        })
        .expect(201, done);
    });
  });

});