/**
 * This is a scaffold for unit tests for the custom function for
 * `embedded.commerce.carts.updateItem.before`.
 * Modify the test conditions below. You may:
 *  - add special assertions for code actions from Simulator.assert
 *  - create a mock context with Simulator.context() and modify it
 *  - use and modify mock Mozu business objects from Simulator.fixtures
 */

'use strict';

var Simulator = require('mozu-action-simulator');
var assert = Simulator.assert;

var actionName = 'embedded.commerce.carts.updateItem.after';

describe('embedded.commerce.carts.updateItem.after implementing embedded.commerce.carts.updateItem.after', function () {

  var action;

  before(function () {
    action = require('../src/domains/commerce.carts/embedded.commerce.carts.updateItem.after');
  });

  it('runs successfully', function(done) {

    var callback = function(err) {
      assert.ok(!err, "Callback was called with an error: " + err);
      // more assertions
      done();
    };

    var context = Simulator.context(actionName, callback);

    // modify context as necessary


    Simulator.simulate(actionName, action, context, callback);
  });
});
