const fibonacci = function(num){
    if (num <= 0) {
        throw new RangeError('Must be positive number!');
    }

    if (num === 1) {
        return [1];
    }

    if (num === 2) {
        return [1, 1];
    }

    let a = 1,
        b = 1,
        temp,
        result = [1, 1];

    num -= 2;

    while (num > 0){
        temp = a;
        a = a + b;
        result.push(a);
        b = temp;
        num--;
    }

    return result;
};

module.exports = {
    fibonacci
};