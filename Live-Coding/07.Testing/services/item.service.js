class Item {
    constructor(price, discount) {
        this.price = price;
        this.discount = discount;
    }

    getLowestPrice() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if(this.discount > 0 && this.discount < 100) {
                    res(this.price * (1  - this.discount / 100));
                } else {
                    rej(new RangeError('Invalid discount'));
                }
            }, 1000);
        });
    }

    async getAsyncLowestPrice() {
        return this.getLowestPrice();
    }
}

module.exports = Item;