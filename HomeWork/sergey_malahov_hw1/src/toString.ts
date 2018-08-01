const customToString = (bool: boolean): string => {
    switch (bool) {
        case true: {
            return '1';
        }
        case false: {
            return '0';
        }
        default: {
            throw new Error('Unallowed parameter. Expected `true` or `false`.');
        }
    }
};

console.log(customToString(true));
console.log(customToString(false));