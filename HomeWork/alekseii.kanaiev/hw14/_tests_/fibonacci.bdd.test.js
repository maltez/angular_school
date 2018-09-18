const { assert } = require('chai');
const { fibonacci } = require('../service/fibonacci.service');

describe('Fibonacci service', () => {
    it('Input 0. Expect [0].', () => {
        const input = 0;
        const expectedResault = [0];

        //Act
        const actualResault = fibonacci(input);

        //Assert
        assert.deepEqual(actualResault, expectedResault)
    });
    it('Input 1. Expect [0].', () => {
        const input = 1;
        const expectedResault = [0];

        //Act
        const actualResault = fibonacci(input);

        //Assert
        assert.deepEqual(actualResault, expectedResault)
    });
    it('Input 4. Expect [0, 1, 1, 2].', () => {
        const input = 4;
        const expectedResault = [0, 1, 1, 2];

        //Act
        const actualResault = fibonacci(input);

        //Assert
        assert.deepEqual(actualResault, expectedResault)
    });
    it('Input -1. Expect RangeError "Invalid argument".', () => {
        const input = -1;

        assert.throws(() => {
            fibonacci(input);
        }, RangeError, 'Invalid argument')
    });
})