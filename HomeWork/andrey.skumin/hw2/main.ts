abstract class Obj234 {
    public abstract valueOf<T>(arg: T): T;
    public abstract toString<T>(arg: T): string;
  }
  
  class Obj235 extends Obj234 {
    public valueOf<T>(x): T {
      return x.valueOf();
    }
    public toString<T>(x): string {
      return x.toString();
    }
  }
  