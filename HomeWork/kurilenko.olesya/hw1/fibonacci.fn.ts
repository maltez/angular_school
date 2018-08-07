// start 1
const getFibonacciNumber: Function = (position: number): number => { 
    if(value <= 0) throw new Error('Argument exception. The position number in Fibonacci number start from 1.');  

    if (position == 1 || position == 2) return 1;

    return (getFibonacciNumber(position-1) + getFibonacciNumber(position-2));    
}