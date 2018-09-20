const Order = require('./order.service');
//const Item = require('./item.service');

module.exports = function(items, cb) {
    const order = new Order();

    setTimeout(() => {
        items.forEach(item => {
            order.addItem(item);
        });
        cb(order);
    }, 100500)
}