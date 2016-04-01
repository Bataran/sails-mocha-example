var Sails = require('sails'),  
    sinon = require('sinon'),
    request = require('supertest');
    assert = require('assert');

describe('UserController use mocked service', function() {

  var userController;

  before(function beforeUserControllerTest(done) {
    userController = sails.controllers.user;
    done();
  });

  describe('when we invoke the initials action', function() {

    before(function() {
      //Mocking service
      sinon.stub(sails.services.userservice, 'initials', function() {
        return 'fake initials';
      });
    });

    after(function() {
      // Restores our mock to the original service
      sails.services.userservice.initials.restore();
    });

    it('should call mocked service', function(done) {

      // JSON object spy
      var params = sinon.stub().returns('56fd2cb6d1618300433e7ec5');
      // Executes controller action
      // userController.userInitials({ 
      //   'params': params 
      // })
      assert(sails.services.userservice);
      request(sails.hooks.http.app)
        .get('/user/56fd2cb6d1618300433e7ec5/initials')
        .expect(200, 'fake initials', done);

      // Makes sure the mocked service was called
      // instead of the real one
      

      //assert(send.calledWith('Our service has a message for you: Hello I am the mocked Service'));
      //
      done();
    })
  });
});
  