
abstract class Obj234 {
  public abstract toString(param: object | string | number | boolean | null | undefined): string;
  public abstract valueOf(param: object | string | number | boolean | null | undefined): number | string | object;
}

class Obj235 extends Obj234 {
  public toString(param: object | string | number | boolean | null | undefined): string {

    if (typeof param == 'object' || typeof param === 'undefined') {
      return JSON.stringify(param)
    }
    return param.toString()
  }

  public valueOf(param: object | string | number | boolean | null | undefined): number | string | object {

    if (!param) {
      return +param
    }
    return param.valueOf()
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
