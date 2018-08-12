function decoratorHWConstructor<T extends { new(...args: any[]): {} }>(constructor: T) {
    var original = constructor;

    function constructNew(constructor, args) {
        var newConstructor: any = function () {
            return constructor.apply(this, args);
        }
        newConstructor.prototype = constructor.prototype;
        return new newConstructor();
    }
    var newConst: any = function (...args) {
        console.log(`Call constructor with param '${args}'`);
        return constructNew(original, args);
    }

    newConst.prototype = original.prototype;
    return newConst;
}
function decoratorHWMetod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    {
        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
        }
        var originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`Call : ${originalMethod.name} metod with param '${args}'`);
            return originalMethod.apply(this, args);
        };
        return descriptor;
    }
}
function decoratorHWProperty(target: any, key: string) {
    var value = this[key];
    var getter = function () {
        console.log(`Call get property: '${key}', return '${value}'`);
        return value;
    };
    var setter = function (newVal) {
        console.log(`Call set property: '${key}' = ${newVal}`);
        value = newVal;
    };
    if (delete this[key]) {

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}


@decoratorHWConstructor
class DecoratorHWClass {
    @decoratorHWProperty name: string = 'test';
    @decoratorHWProperty data: Date = new Date();

    constructor(name: string, data: Date) {
        this.name = name;
        this.data = data;
    }
    @decoratorHWMetod
    doHomeWork(...arg: string[]): void {
        console.log(`did home work`);
    }
}
let dec = new DecoratorHWClass('1', new Date(2018, 08, 12));
dec.name = 'Vasya';
dec.doHomeWork('did that');
