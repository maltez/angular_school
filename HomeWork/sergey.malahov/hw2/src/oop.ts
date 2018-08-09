abstract class Obj234 {
    public abstract valueOf<T>(param:T):string;
    public abstract toString<T>(param:T):string;
}

class Obj235 extends Obj234{
    valueOf<T>(param:T): string {
        let result = typeof param;
        return `Type of parameter is ${result}`;
    }
    toString<T>(param:T): string {
        return `${param}`;
    }
}


const obj235 = new Obj235();

console.log(obj235.toString(34));
console.log(obj235.valueOf(34));
console.log(obj235.valueOf(true));
console.log(obj235.valueOf([1,2,3,4]));
console.log(obj235.valueOf('sample string'));