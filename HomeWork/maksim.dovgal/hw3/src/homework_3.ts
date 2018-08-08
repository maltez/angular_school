// interface
interface Convert {
    from(srcVal: number): string;
    to(srcVal: string): number;
}

// class parent, which contains common methods
class Converter {

    // division without remnant
    protected div(a: number, b: number): number {
        return (a - a % b) / b;
    }

    // square root
    protected sqrt(a: number, b: number): number {
        const mult = a;

        for (let i = b - 1; i > 0; i--) {
            a *= mult;
        }

        return b ? a : 1;
    }
}

// decimal <=> binary
class BinaryConverter extends Converter implements Convert {

    constructor() {
        super();
    }

    from(srcVal: number): string {
        let tempVal = '',
            destVal = '';
        while (srcVal > 0) {
            tempVal += srcVal % 2;
            srcVal = this.div(srcVal, 2);
        }
        for (let i = tempVal.length - 1; i >= 0; i--) {
            destVal += tempVal[i];
        }
        return destVal;
    }

    to(srcVal: string): number {
        let destVal = 0;
        for (let i = 0; i < srcVal.length; i++) {
            destVal += +srcVal[i]*this.sqrt(2, srcVal.length - (i + 1));
        }
        return destVal;
    }
}

// decimal <=> octal
class OctalConverter extends Converter implements Convert {

    constructor() {
        super();
    }

    from(srcVal: number): string {
        return ('' + this.div(srcVal, 8)) + (srcVal % 8);
    }

    to(srcVal: string): number {
        let multVal = '',
            taleVal = srcVal[srcVal.length - 1];
        for (let i = 0; i < srcVal.length - 1; i++) {
            multVal += srcVal[i];
        }
        return +multVal*8 + +taleVal;
    }
}

// decimal <=> hex
class HexadecimalConverter extends Converter implements Convert {

    constructor() {
        super();
    }

    from(srcVal: number): string {
        const headVal = this.div(srcVal, 16);
        let taleVal: number | string = srcVal - headVal * 16;
        switch (taleVal) {
            case 10:
                taleVal = 'A';
                break;
            case 11:
                taleVal = 'B';
                break;
            case 12:
                taleVal = 'C';
                break;
            case 13:
                taleVal = 'D';
                break;
            case 14:
                taleVal = 'E';
                break;
            case 15:
                taleVal = 'F';
                break;
        }
        return ('' + headVal) + taleVal;
    }

    to(srcVal: string): number {
        let taleVal: number | string = srcVal[srcVal.length - 1];
        let headVal = '';

        for (let i = 0; i < srcVal.length - 1; i++) {
            headVal += srcVal[i];
        }

        switch (taleVal) {
            case 'A':
                taleVal = 10;
                break;
            case 'B':
                taleVal = 11;
                break;
            case 'C':
                taleVal = 12;
                break;
            case 'D':
                taleVal = 13;
                break;
            case 'E':
                taleVal = 14;
                break;
            case 'F':
                taleVal = 15;
                break;
            default:
                taleVal = +taleVal;
        }
        return (+headVal * 16) + taleVal;
    }
}

const binaryConverter = new BinaryConverter();
const octalConverter = new OctalConverter();
const hexadecimalConverter = new HexadecimalConverter();

console.log(binaryConverter.from(156));
console.log(binaryConverter.to('111001'));

console.log(octalConverter.from(10));
console.log(octalConverter.to('20'));

console.log(hexadecimalConverter.from(30));
console.log(hexadecimalConverter.to('8F'));