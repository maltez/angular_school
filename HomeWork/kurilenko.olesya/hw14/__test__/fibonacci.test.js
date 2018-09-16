const { assert, expect } = require('chai');
const { fibonacci } = require('../services/fibonacci.service');


    const fibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21];
    let fibonaccires;
    let possitionNumber = 0;
    
    test('should return RangeError for fibonacci(0) ', () => {
        possitionNumber = 0;
       assert.throws(()=>fibonacci(possitionNumber),RangeError);
    });

    test('should return Array=[0] for fibonacci(1) ', () => {
        possitionNumber = 1;
        fibonaccires = [];
        fibonaccires=fibonacciArray.slice(0, possitionNumber);
       expect(fibonacci(possitionNumber)).deep.equal(fibonaccires);
    });

    test('should return Array=[0,1,1,2,3,5] for fibonacci(6) ', () => {
        possitionNumber = 6;
        fibonaccires = [];
        fibonaccires=fibonacciArray.slice(0, possitionNumber);
       expect(fibonacci(possitionNumber)).deep.equal(fibonaccires);
    });

