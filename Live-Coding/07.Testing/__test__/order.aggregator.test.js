const aggregator = require('../services/item.agregator');
const Item = require('../services/item.service');
const { assert } = require('chai');

jest.useFakeTimers();

test('Test order aggregator', (done) => {
    const items = [new Item(3, 0), new Item(7, 0)];

    const cb = (order) => {
        assert.equal(order.total, 10);
        done();
    }

    aggregator(items, cb);
    jest.runAllTimers();
});