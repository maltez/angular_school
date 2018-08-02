const fibonacci = function(number:number):number {
    let a:number = 0;
    let b:number = 1;
    let result:number = b;

    if (number === 1) return a;

    for (let i:number = 3; i <= number; i++) {
        result = a+b;
        a=b;
        b=result;
    }
    return result;
};
let fibonacciResult = fibonacci(5);
console.log(fibonacciResult);