abstract class Obj234 {
    public abstract valueOf<T>(val: T): number;
    public abstract toString<T>(val: T): string;
}

class Obj235 extends  Obj234 {
    public valueOf<T>(val: T): number {
        return +val;
    }

    public toString<T>(val: T): string {
        return val + '';
    }
}

const obj235 = new Obj235();
const date = new Date();

console.log(obj235.valueOf(date));
console.log(obj235.toString(date));
console.log(obj235.valueOf('123'));
console.log(obj235.toString({first: 'dfsad'}));
console.log(obj235.toString([1,2]))