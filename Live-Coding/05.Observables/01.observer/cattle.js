class Cattle {
    constructor(water) {
        this.water = water;
        this.__temperature = 20;
    }

    boil() {
        this.water = false;
        this.__temperature = 100;
    }
}

module.exports = Cattle;