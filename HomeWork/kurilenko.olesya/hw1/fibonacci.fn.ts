// start 1
const getFibonacciNumber: Function = (position: number): number => {   
    if (position == 1 || position == 2) return 1;

    return (getFibonacciNumber(position-1) + getFibonacciNumber(position-2));    
}