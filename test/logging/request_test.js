
/**
 * Module dependencies.
 */

import Request from 'request';
import request from '../../src/logging/request';

/**
 * Test `Request`.
 */

describe('Request', () => {
  describe('exports', () => {
    it('should not change `request` by reference', () => {
      request.should.not.be.equal(Request);
    });
  });
});
