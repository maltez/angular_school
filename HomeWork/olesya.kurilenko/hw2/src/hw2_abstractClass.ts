abstract class Obj234 {
    abstract valueOf<T>(param: T):  number;
    abstract toString<T>(param: T): string;
}

class Obj235 extends Obj234 {

    valueOf<T>(param: T): number {
       return +param;
    }    
    
    toString<T>(param: T): string {
        return param.toString();
    }
}

// type arrayCollectionType = boolean | number| string | object;
// type paramType = arrayCollectionType | Array<arrayCollectionType> | void | null | undefined;

// abstract class Obj234_1{
//   abstract valueOf(param: paramType): number;
//   abstract toString(param: paramType): string;
// }
