class Short {
    public size: string;
    protected caption: string;
    private length: number;

    constructor();
    constructor(size, caption, length);

    constructor(size = 'M', caption = 'None', length= 58) {
        this.size = size;
        this.caption = caption;
        this.length = length;
    }

    public wear():void {
        console.log(`I wear short ${this.size} with cation ${this.caption} for two months`)
    }
}

class TShort extends Short {
    private __springs: number = 0;

    public get springers(): string {
        return this.__springs.toString()
    }

    public set springers(val: string) {
        this.__springs = Number.parseFloat(val);
    }

    constructor() {
        super('L', 'Kiss my shorts', 62);
    }

    wear():void {
        console.log('I wear nice t-short');
        console.log(`Caption on my t-short is ${this.caption}`)
        super.wear();
    }
}

const tshort = new TShort();
console.log(tshort.springers);
tshort.springers = '12.34';