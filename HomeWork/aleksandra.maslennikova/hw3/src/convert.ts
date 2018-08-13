/*# Homework 3
- Create interface Convert. It contains two methods from, to.
    - From retrieves decimal number returns string.
    - To retrieves string returns decimal number.
- Interface should be implemented by three classes
    - BinaryConverter -> convert decimal to binary
    - OctalConverter -> convert decimal to octal
    - HexadecimalConverter -> convert hex to decimal.
    - Forbidden use external convert functions only * and /; */


interface Convert {
  from(number: number): string;
  to(number: string): number;
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
    const result = arr.reduce((acc, item, index)=>{
      return (item === '1') ? acc + Math.pow(2, index) : acc;
    }, 0);

    console.log(result);
    return result;


  }
}

const converter = new BinaryConverter;
console.log(converter.from(25));
console.log(converter.from(0));
console.log(converter.to('111'));
console.log(converter.to('1111'));
/*class ClassicalMusic implements Music {
   play(trackName:string): void {
       console.log(`Mozart playing ${trackName}`);
   }

   public violin: boolean = true;
}

class RockMusic implements Music, Drum {
  tuc(): void {
      console.log('Tuc tuc tuc');
  }
  play(trackName:string): void {
      console.log(`THUNDER!!!! THUNDER!!! ${trackName}!!!!`);
  }

  public guitar: boolean = true;
}

const music: Music = new ClassicalMusic();
let rockNRoll: Drum = new RockMusic();*/
