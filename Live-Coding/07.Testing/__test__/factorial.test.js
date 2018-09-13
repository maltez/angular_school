const { assert } = require('chai');
const { factorial } = require('../services/factorial.service');

test('Test factorial. Input 5. Expect 125', () => {
    // Arrange
    const input = 5;
    const expectedResult = 120;

    // Act
    const actualResult = factorial(input);

    // Assert
    assert.equal(actualResult, expectedResult);
});

test('Test factorial. Input 0. Expected 1', () => {
    // Arrange
    const input = 0;
    const expectedResult = 1;

    // Act
    const actualResult = factorial(input);

    // Assert
    assert.equal(actualResult, expectedResult);
});

test('Test factorial. Input 1. Expected 1', () => {
    // Arrange
    const input = 1;
    const expectedResult = 1;

    // Act
    const actualResult = factorial(input);

    // Assert
    assert.equal(actualResult, expectedResult);
});

test('Test factorial. Input -1. Expected RangeError', () => {
    const input = -1;

    assert.throw(() => {
        factorial(input);
    }, 'Invalid argument');
});