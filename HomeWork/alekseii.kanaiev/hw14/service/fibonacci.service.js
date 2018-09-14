
const fibonacci = function(num) {
    if (num < 0) {
        throw new RangeError('Invalid argument')
    };
    const result = [0];
    if (num === 0){
        console.log(result);
        return result;
    };
    for (let i = 0, k = 1; i < num-1; i++) {
        result.push(k+result[i]);
        k = result[i];
    };
    console.log(result);
    return result;
}
module.exports = {
    fibonacci
}