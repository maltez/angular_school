function fib(num: number): number {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return fib(num - 2) + fib(num - 1);
    }
}

console.log(fib(7));