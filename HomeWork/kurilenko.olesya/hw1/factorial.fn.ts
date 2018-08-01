const getFactorial: Function = (value: number = 0): number => {
    if (value == 0 || value == 1)
        return 1;
    return value * getFactorial(value-1);
}