
abstract class Obj234 {
  public abstract toString<T>(param: T): string;
  public abstract valueOf<T>(param: T): number;
}

class Obj235 extends Obj234 {
  public toString<T>(param: T): string {
    return String(param)
  }

  public valueOf<T>(param: T): number {
    return Number(param)

  }
}

const myObg = new Obj235();
console.log(myObg.toString({ 1: 2 }))
console.log(myObg.toString(1));
console.log(myObg.toString(false));
console.log(myObg.toString(undefined));
console.log(myObg.toString(null));
console.log(myObg.toString([1, 2, 3]));
console.log(myObg.valueOf({ 1: 2 }))
console.log(myObg.valueOf(1));
console.log(myObg.valueOf(false));
console.log(myObg.valueOf(undefined));
console.log(myObg.valueOf(null));
console.log(myObg.valueOf([1, 2, 3]));
console.log(myObg.valueOf('hello'));
