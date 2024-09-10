"use strict";

// require assert

var assert = require('assert');

// require the source module

const sum = require('../src');

describe('smoke test', () => {
  context('sum function', () => {
    [
      { values: [], expected: 0 },
      { values: [20, 15], expected: 35 },
      { values: [-2], expected: -2 },
      { values: [20, 35, 40], expected: 95 },
    ].forEach(function (el) {
      it(`should sum ${(el.values.length > 0 ? el.values : 'an empty array' )} and return ${el.expected}`, done => {
        const total = sum(el.values)
        assert.equal(total, el.expected,
          'not the expected return value');
        done();
      });
    });
  });
});