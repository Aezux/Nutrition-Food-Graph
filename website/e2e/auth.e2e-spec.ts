'use strict';

var expec = require('chai').expect;
var runInSandbox = require("auth0-rules-testharness");

var user = {
  "email": "richard.seldon@auth0.com",
  "email_verified": true,
  "name": "Richard Seldon"
};

var context = {
  "clientID": "wWXS5rz3asdfdfkzbCXho3zNPNv77c",
  "clientName": "My Auth0 Client",
  "connection": "MY-DB"
};

var configuration = {
  NAME: 'world'
};

var params = {
  timeout: 5,
  ca: '',
  tenant: 'csc360-webapps',
  url: 'https://sandbox.it.auth0.com',
  token: 'wt-771d5396b03b50c522b723817997cce6-0'
};


describe('auth0-rules-testharness', function () {

  var ruleScript = `function (user, context, callback) {
  console.log('hello,', configuration.NAME);
  user.foo = "bar";
  callback(null, user, context);
}`;

  it('should console log "hello, world" - available in output array', function (done) {

    var callback = function (err, result, output, stats) {
      // console.log('output: ', output);
      expec(output[0]).to.equal('hello, world');
      done();
    };

    var args = [user, context, callback];
    runInSandbox(ruleScript, args, configuration, params);
  });

  it('should append attribute "foo" to user with value "bar" - available in result object', function (done) {

    var callback = function (err, result, output, stats) {
      // console.log('result: ', result);
      expec(result.foo).to.equal('bar');
      done();
    };

    var args = [user, context, callback];
    runInSandbox(ruleScript, args, configuration, params);
  });

});