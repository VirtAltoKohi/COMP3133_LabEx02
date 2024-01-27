// test/calculator.js

import { assert } from 'chai';
import { add, sub, mul, div } from '../app/calculator.js';

// Sample test cases
describe('Calculator Tests', function () {
    it('add - should return the sum of two numbers', function () {
        assert.equal(add(5, 2), 7); // PASS
        assert.equal(add(5, 2), 8); // FAIL
    });

    it('sub - should return the difference of two numbers', function () {
        assert.equal(sub(5, 2), 3); // PASS
        assert.equal(sub(5, 2), 5); // FAIL
    });

    it('mul - should return the product of two numbers', function () {
        assert.equal(mul(5, 2), 10); // PASS
        assert.equal(mul(5, 2), 12); // FAIL
    });

    it('div - should return the quotient of two numbers', function () {
        assert.equal(div(10, 2), 5); // PASS
        assert.equal(div(10, 2), 2); // FAIL
    });
});
