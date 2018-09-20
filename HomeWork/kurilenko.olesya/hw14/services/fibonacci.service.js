const fibonacci = function(serialNumber) {
    if (serialNumber <= 0) {
        throw new RangeError('Invalid Range')
    };
    const resultNum = [];
    resultNum.push(0);
    if (serialNumber === 1 ){
       return resultNum;
    };
    resultNum.push(1);
    if (serialNumber === 2 ){
        return resultNum;        
    };
    for (let i = 2; i < serialNumber; i++) {
        let res = (resultNum[i-2]+resultNum[i-1]);
        resultNum.push(res);
    };
    return resultNum;
}
module.exports = {
    fibonacci
}