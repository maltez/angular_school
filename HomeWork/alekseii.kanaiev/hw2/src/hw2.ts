abstract class Obj234 {
    public abstract valueOF <T> (arg: T):void;
    public abstract toString1 <T> (arg: T):string;
}

class Obj235 extends Obj234{
    public valueOF <T> (arg: T):void{
        console.log(arg.valueOf());
    }
    public toString1 <T> (arg: T):string{
        console.log(arg.toString());
        return arg.toString();
    }
}