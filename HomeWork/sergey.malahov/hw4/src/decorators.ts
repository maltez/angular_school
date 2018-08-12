class C {
    @logProperty
    baz: number;

    @logMethod()
    foo(n: number) {
        return n * 2;
    }
}

function logProperty(target, propertyKey: string) {
    let val = this[propertyKey];
    function get() {
        console.log(`Get => ${propertyKey}`);
        return val;
    }

    function set(newVal) {
        console.log(`Set: ${propertyKey} => ${newVal}`);
        val = newVal;
    }

    Object.defineProperty(target, propertyKey, {get, set});
}

function logMethod() {
    return function (target, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
        const originalMethod = descriptor.value; // save a reference to the original method

        descriptor.value = function (...args: any[]) {
            console.log(`Invoke: ${propertyKey} => ${args}`);
            // run and store result
            return originalMethod.apply(this, args);
        };

        return descriptor;
    }
}

const c = new C();
console.log(c.foo(5));
console.log(c.foo(6));
console.log(c.foo(7));
c.baz = 55;
c.baz = 57;
c.baz = 58;
console.log(c.baz);
console.log(c.baz);

console.dir(c);



