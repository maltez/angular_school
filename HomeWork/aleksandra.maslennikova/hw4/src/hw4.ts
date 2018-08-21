function logger(...arg):any {
  if (arg.length === 1) {
    console.log('Class instance was created');
  }
  else if (arg[2]) {
    const descriptor:PropertyDescriptor = arg[2];
    const originalValue: Function = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`${originalValue.name} metod was called`);
            return originalValue.apply(this, args);
        };
        return descriptor;
  } else {
    const key:string = arg[1];
    let val: string = this[key];

    const getter = function (): string {
      console.log(`Get: ${key} => ${val}`);
      return val;
    };

    const setter = function (newVal:any):void {
      console.log(`Set: ${key} => ${newVal}`);
      val = newVal;
    };

    if (delete this[key]) {
      Object.defineProperty(arg[0], key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  }
}

@logger
class Dog {
  @logger
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  @logger
  bark():void {
    console.log(`${this.name} barks`)
  }
}

const greeter:Dog = new Dog('Alex');
greeter.bark();
greeter.name
