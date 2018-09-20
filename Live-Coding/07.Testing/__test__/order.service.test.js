const Order = require('../services/order.service');
const Item = require('../services/item.service');

describe('Test order service functionality', () => {

    let order;

    beforeEach(() => {
        order = new Order();
    });

    it('Add one item with price 10. Total price should be equal 10', () => {
        const item = new Item(10, 0);

        order.addItem(item);

        expect(order.total).toEqual(10);
    });

    it('Add two items with prices 3 and 7. Total price should be equal 10', () => {
        const item = new Item(3, 0);
        const item1 = new Item(7, 0);

        order.addItem(item);
        order.addItem(item1);

        expect(order.total).toEqual(10);
    });

    it('Add two items with prices 3 and 7. Remove item with price 3. Total price should be equal 7.', () => {
        const item = new Item(3, 0);
        const item1 = new Item(7, 0);

        order.addItem(item);
        order.addItem(item1);
        order.removeItem(item);

        expect(order.total).toEqual(7);
    });


});