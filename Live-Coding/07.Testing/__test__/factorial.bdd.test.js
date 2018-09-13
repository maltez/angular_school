const { assert } = require('chai');
const { factorial } = require('../services/factorial.service');

describe('Factorial service', () => {
    it('Input 0. Expected 1', () => {
        // Arrange
        const input = 0;
        const expectedResult = 1;

        // Act
        const actualResult = factorial(input);

        // Assert
        assert.equal(actualResult, expectedResult);
    });

    it('Input 1. Expected 1', () => {
        // Arrange
        const input = 1;
        const expectedResult = 1;

        // Act
        const actualResult = factorial(input);

        // Assert
        assert.equal(actualResult, expectedResult);
    });

    it('Input 2. Expected 2', () => {
        // Arrange
        const input = 2;
        const expectedResult = 2;

        // Act
        const actualResult = factorial(input);

        // Assert
        assert.equal(actualResult, expectedResult);
    });

    it('Input 3. Expected 6', () => {
        // Arrange
        const input = 3;
        const expectedResult = 6;

        // Act
        const actualResult = factorial(input);

        // Assert
        assert.equal(actualResult, expectedResult);
    });


    it('Input 5. Expected 120', () => {
        // Arrange
        const input = 5;
        const expectedResult = 120;

        // Act
        const actualResult = factorial(input);

        // Assert
        assert.equal(actualResult, expectedResult);
    });


    it('Input -1. Throw new error with message Invalid error', () => {
        const input = -1;

        assert.throw(() => {
            factorial(input)
        }, 'Invalid argument');
    });
});