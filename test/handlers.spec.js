'use strict';
const assert = require('assert');

const {parsePayload, checkHeadersForThing} = require('../lib/handlers');

describe('Handlers', () => {
  describe('parsePayload', () => {
    it('should return a string', () => {
      const request = {payload: {'dink': 'donk'}};
      assert.equal(typeof parsePayload(request), 'string');
    });
  });

  describe('checkHeadersForThing', () => {
    it('should return Found it! if found', () => {
      const request = {headers: {fooHeader: 'thing'}};
      assert.equal(checkHeadersForThing(request), 'Found it!');
    });

    it('should return WHAMMY! if not found', () => {
      const request = {headers: {fooHeader: 'bink'}};
      assert.equal(checkHeadersForThing(request), 'WHAMMY!');
    });
  });
});

