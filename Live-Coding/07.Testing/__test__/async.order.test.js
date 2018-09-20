const Item = require('../services/item.service');


test('Test async lowest price', async () => {
    const item = new Item(100, 10);
    const price = await item.getAsyncLowestPrice();
    expect(price).toEqual(90);
});