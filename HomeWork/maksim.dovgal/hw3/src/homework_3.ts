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

    protected reverseStr(str: string): string {
        let result = '';
        for (let i = str.length - 1; i >= 0; i--) {
            result += str[i];
        }
        return result;
    }
}

// decimal <=> binary
class BinaryConverter extends Converter implements Convert {

    constructor() {
        super();
    }

    from(srcVal: number): string {
        let tempVal = '';

        while (srcVal > 0) {
            tempVal += srcVal % 2;
            srcVal = this.div(srcVal, 2);
        }

        return this.reverseStr(tempVal);
    }

    to(srcVal: string): number {
        let resultVal = 0;

        for (let i = 0; i < srcVal.length; i++) {
            resultVal += +srcVal[i]*this.sqrt(2, srcVal.length - (i + 1));
        }

        return resultVal;
    }
}

// decimal <=> octal
class OctalConverter extends Converter implements Convert {

    constructor() {
        super();
    }

    from(srcVal: number): string {
        let headVal = srcVal,
            resultVal = '';

        while (headVal > 8) {
            let tempVal = headVal;
            headVal = this.div(headVal, 8);
            resultVal += tempVal - headVal * 8;
        }

        return this.reverseStr(resultVal + headVal);
    }

    to(srcVal: string): number {
        let resultVal = 0;
        srcVal = this.reverseStr(srcVal);

        for (let i = 0; i < srcVal.length; i++) {
            resultVal += +srcVal[i] * this.sqrt(8, i);
        }

        return resultVal;
    }
}

// decimal <=> hex
class HexadecimalConverter extends Converter implements Convert {

    constructor() {
        super();
    }

    from(srcVal: number): string {
        let headVal: number = srcVal,
            taleVal: number | string = '',
            resultTale: string = '';

        while (headVal > 9) {
            let tempVal = headVal;
            headVal = this.div(headVal, 16);
            taleVal = tempVal - headVal * 16;
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
            resultTale += taleVal;
        }

        return ('' + headVal) + this.reverseStr(resultTale);
    }

    to(srcVal: string): number {
        let resultVal = 0;
        srcVal = this.reverseStr(srcVal);

        for (let i = 0, tempVal; i < srcVal.length; i++) {
            tempVal = srcVal[i];
            switch (tempVal) {
                case 'A':
                    tempVal = 10;
                    break;
                case 'B':
                    tempVal = 11;
                    break;
                case 'C':
                    tempVal = 12;
                    break;
                case 'D':
                    tempVal = 13;
                    break;
                case 'E':
                    tempVal = 14;
                    break;
                case 'F':
                    tempVal = 15;
                    break;
                default:
                    tempVal = +tempVal;
            }
            resultVal += tempVal * this.sqrt(16, i);
        }

        return resultVal;
    }
}

const binaryConverter = new BinaryConverter();
const octalConverter = new OctalConverter();
const hexadecimalConverter = new HexadecimalConverter();

console.log(binaryConverter.from(1253));
console.log(binaryConverter.to('10011100101'));

console.log(octalConverter.from(1253));
console.log(octalConverter.to('2345'));

console.log(hexadecimalConverter.from(1253));
console.log(hexadecimalConverter.to('4E5'));