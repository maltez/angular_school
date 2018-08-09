interface Convert {
    from(num: number): string;

    to(str: string): number;
}

abstract class UniversalConverter implements Convert {
    protected base: number;
    protected baseCollection = '0123456789ABCDEF';

    protected constructor(base: number) {
        this.base = base;
    }

    from(num: number): string {
        let resultString = '';
        do {
            resultString = this.baseCollection.charAt(num % this.base) + resultString;
        } while ((num = Math.floor(num / this.base)) !== 0);
        return resultString;
    }

    to(str: string): number {
        let resultNumber = 0;
        for (let i = 0; i < str.length; i++) {
            resultNumber = this.baseCollection.indexOf(str[i]) + (this.base * resultNumber);
        }
        return resultNumber;
    }
}

class BinaryConverter extends UniversalConverter {
    constructor() {
        super(2);
    }
}

class OctalConverter extends UniversalConverter {
    constructor() {
        super(8);
    }
}

class HexadecimalConverter extends UniversalConverter {
    constructor() {
        super(16);
    }
}

const binaryConverter = new BinaryConverter();
const octalConverter = new OctalConverter();
const hexadecimalConverter = new HexadecimalConverter();


console.log(binaryConverter.from(0));
console.log(binaryConverter.from(5));
console.log(binaryConverter.to('11'));
console.log(binaryConverter.to('101'));
console.log(binaryConverter.from(256));
console.log(binaryConverter.to(binaryConverter.from(256)));
console.log(binaryConverter.from(255));
console.log(octalConverter.from(9));
console.log(octalConverter.from(8));
console.log(octalConverter.to(octalConverter.from(8)));
console.log(octalConverter.from(34));

console.log(hexadecimalConverter.from(0));
console.log(hexadecimalConverter.from(16));
console.log(hexadecimalConverter.from(10));
console.log(hexadecimalConverter.from(17));
console.log(hexadecimalConverter.to('FF'));

