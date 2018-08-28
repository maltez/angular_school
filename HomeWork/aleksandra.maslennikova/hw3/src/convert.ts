interface Convert {
  from(number: number): string;
  to(number: string): number;
  division(number: number): number;
}

class BinaryConverter implements Convert {

  from(number: number): string {
    let quotient: number = number;
    let result: number[] = [];
    while (quotient >= 0) {
      const sum: number = ~~this.division(quotient);
      const rest: number = quotient - (sum * 2);
      result.push(rest);
      quotient = sum;
    }

    return result.reverse().join('')

  }

  division(number: number): number {
    const a = number / 2;
    return a
  }

  to(number: string): number {
    const arr = number.split('').reverse();
    const result = arr.reduce((acc, item, index) => {
      return (item === '1') ? acc + Math.pow(2, index) : acc;
    }, 0);
    return result;
  }

}

const converter = new BinaryConverter;

console.log(converter.from(25));
console.log(converter.from(0));
console.log(converter.to('111'));
console.log(converter.to('1111'));


class OctalConverter implements Convert {

  from(number: number): string {
    let quotient: number = number;
    let result: number[] = [];

    while (quotient >= 8) {
      const sum: number = ~~this.division(quotient);
      const rest: number = quotient - (sum * 8);
      result.push(rest);
      quotient = sum;
    }
    result.push(quotient);
    return result.reverse().join('')

  }
  division(number: number): number {
    const a = number / 8;
    return a
  }
  to(number: string): number {
    const arr = number.split('').reverse();
    const result = arr.reduce((acc, item, index) => {
      return acc + (Math.pow(8, index) * Number(item));
    }, 0);

    return result;
  }
}

const oconverter = new OctalConverter;
console.log(oconverter.from(58));
console.log(oconverter.from(125));
console.log(oconverter.to('15'));
console.log(oconverter.to('75'));

class HexadecimalConverter implements Convert {

  from(number: number): string {
    let quotient: number = number;
    let result: number[] = [];
    const letters: object = {
      10: 'A',
      11: 'B',
      12: 'C',
      13: 'D',
      14: 'E',
      15: 'F'
    }

    while (quotient >= 16) {
      const sum: number = ~~this.division(quotient);
      let rest: number = quotient - (sum * 16);
      if (rest > 9) {
        rest = letters[rest]
      }
      result.push(rest);
      quotient = sum;

      if (quotient > 9) {
        quotient = letters[quotient];
      }
      result.push(quotient);
      return result.reverse().join('')

    }
  }
  division(number: number): number {
    const a = number / 16;
    return a
  }
  to(number: string): number {
    const numbers: object = {
      'A': 10,
      'B': 11,
      'C': 12,
      'D': 13,
      'E': 14,
      'F': 15
    }
    const arr = number.split('').reverse();
    const result = arr.reduce((acc, item, index) => {
      const convertedNumber = numbers[item] ? numbers[item] : Number(item);
      return acc + (Math.pow(16, index) * convertedNumber);
    }, 0);

    return result;
  }
}

const hconverter = new HexadecimalConverter;
console.log(hconverter.from(58));
console.log(hconverter.from(125));
console.log(hconverter.to('3A'));
console.log(hconverter.to('2F'));
