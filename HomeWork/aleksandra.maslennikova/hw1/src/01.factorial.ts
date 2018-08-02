const factorial = function (number: number): number {
    let currentVal: number = 1;
    for (let i: number = 2; i <= number; i++) {
        currentVal = currentVal * i;
    }
    return currentVal;
}

let fiveFuctorial:number = factorial(5);

console.log(fiveFuctorial);
