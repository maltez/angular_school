class Order {
    constructor () {
        this.total = 0;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        this.total += item.price;
    }

    removeItem(item) {
        this.items.filter(n => {
            n !== item;
        })

        this.total -= item.price;
    }
}

module.exports = Order;

