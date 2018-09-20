 const Item = require('../services/item.service');

jest.useFakeTimers();

test('Input price 100 with discount 10. Expected lowestPrice equals 90', () => {
    const item = new Item(100, 10);

    const promise = item.getLowestPrice()
        .then((res) => {
            expect(res).toEqual(90);
        });
    jest.runAllTimers();

    return promise;
});

test('Input price 100 with discount 101. Expected rejection', (done) => {
    const item = new Item(100, 101);

    item.getLowestPrice()
        .catch((err) => {
            expect(err.message).toEqual('Invalid discount')
            done();
        });
    jest.runAllTimers();
});