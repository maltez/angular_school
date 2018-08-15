const factorial = function(n: number): number {
    return (n <= 1 ? 1 : n*factorial(n - 1));
};


const fibonacci = function(n: number): number {
    return (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n -2));
};

const getTooString = function(input: boolean): string {
    return input ? '1' : '0';
};