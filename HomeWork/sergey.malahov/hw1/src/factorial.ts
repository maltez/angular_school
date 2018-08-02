/**
 * Factorial function
 * @param number
 */
const factorial = (number: number): number => {
    if (number < 0) {
        throw new Error('Number can not be less zero.');
    }
    return [0, 1].includes(number) ? 1 : factorial(number - 1) * number;
};

try {
    console.log(factorial(-4));
}
catch (e) {
    console.log(e.toString());
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));






