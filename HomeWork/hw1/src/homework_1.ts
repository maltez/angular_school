// factorial function
const fact1 = (x: number): number => {
    let result: number = 1;
    for (let i = 1; i <= x; i++) {
      result *= i;
    }
    return result;
};

const fact2 = (x: number): number => (x > 0) ? x * fact2(x - 1) : 1;

// fibonacci numbers function
const fibonacci1 = (startNumber: number = 0, countOfNumbers: number = 10): Array<number> => {
    const result: Array<number> = [startNumber];
    for (let i = 1; i < countOfNumbers; i++) {
      if (i === 1) {
          result.push(startNumber === 0 ? 1 : startNumber);
      } else {
          result.push(result[i - 1] + result[i - 2]);
      }
    }
    return result;
};

const fibonacci2 = (startNumber: number = 0, countOfNumbers: number = 10, resultArr: Array<number> = []): Array<number> => {
    if (countOfNumbers > 0) {
        resultArr.length > 1 ? resultArr.push(resultArr[resultArr.length - 1] + resultArr[resultArr.length - 2]) : resultArr.push(startNumber === 0 ? 1 : startNumber);
        fibonacci2(startNumber, countOfNumbers - 1, resultArr);
    }
    return resultArr;
};

// boolean to string function
const booleanToString = (bool: boolean): string => bool ? '0' : '1';

console.log(fact1(3), fact2(5));
console.log(fibonacci1(8, 5), fibonacci2());
console.log(booleanToString(true));