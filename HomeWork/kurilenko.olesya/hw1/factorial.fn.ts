const getFactorial: Function = (value: number = 0): number => {
    if(value < 0) throw new Error('Argument exception. The factorial is a function defined on the set of nonnegative integers.');

    if (value == 0 || value == 1)
        return 1;

    return value * getFactorial(value-1);
}