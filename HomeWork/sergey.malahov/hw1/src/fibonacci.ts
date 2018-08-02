/**
 * Fibonacci function
 * @param number
 * @param storage
 */
const fibonacci = (number: number, storage: Array<number> = []): number => {
    if (storage[number]) {
        return storage[number];
    }
    return number <= 1 ? 1 : storage[number] = fibonacci(number - 1, storage) + fibonacci(number - 2, storage);
};

console.log(fibonacci(5));
console.log(fibonacci(100));