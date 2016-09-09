'use strict';

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _request3 = require('../../src/logging/request');

var _request4 = _interopRequireDefault(_request3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test `Request`.
 */

/**
 * Module dependencies.
 */

describe('Request', () => {
  describe('exports', () => {
    it('should not change `request` by reference', () => {
      _request4.default.should.not.be.equal(_request2.default);
    });
  });
});