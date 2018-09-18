const { assert } = require('chai');
const { fibonacci } = require('../services/fibonacci.service');

describe('Fibonacci service', () => {
    it('Test fibonacci. Input 5. Expect [1, 1, 2, 3, 5]', () => {
        // Arrange
        const input = 5;
        const expectedResult = JSON.stringify([1,1,2,3,5]);

        // Act
        const actualResult = fibonacci(input);

        // Assert
        assert.equal(JSON.stringify(actualResult), expectedResult);
    });

    it('Test fibonacci. Input 2. Expected [1, 1]', () => {
        // Arrange
        const input = 2;
        const expectedResult = JSON.stringify([1, 1]);

        // Act
        const actualResult = fibonacci(input);

        // Assert
        assert.equal(JSON.stringify(actualResult), expectedResult);
    });

    it('Test fibonacci. Input 1. Expected [1]', () => {
        // Arrange
        const input = 1;
        const expectedResult = JSON.stringify([1]);

        // Act
        const actualResult = fibonacci(input);

        // Assert
        assert.equal(JSON.stringify(actualResult), expectedResult);
    });

    it('Test fibonacci. Input -1. Expected RangeError', () => {
        const input = -1;

        assert.throw(() => {
            fibonacci(input);
        }, 'Must be positive number!');
    });
});