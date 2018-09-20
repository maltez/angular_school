// import { assert } from 'chai';
// import { fibonacci } from '../service/fibonacci.service';
const { assert } = require('chai');
const { fibonacci } = require('../service/fibonacci.service');

test('Test fibonacci. Input 0. Expect [0]', () => {
    const input = 0;
    const expectedResault = [0];

    const actualResault = fibonacci(input);

    assert.deepEqual(actualResault, expectedResault)
});
test('Test fibonacci. Input 1. Expect [0]', () => {
    const input = 1;
    const expectedResault = [0];

    const actualResault = fibonacci(input);

    assert.deepEqual(actualResault, expectedResault)
});
test('Test fibonacci. Input 4. Expect [0, 1, 1, 2]', () => {
    const input = 4;
    const expectedResault = [0, 1, 1, 2];

    const actualResault = fibonacci(input);

    assert.deepEqual(actualResault, expectedResault)
});
test('Test fibonacci. Input -1. Expect RangeError "Invalid argument"', () => {
    const input = -1;

    assert.throws(() => {
        fibonacci(input);
    }, RangeError, 'Invalid argument')
});