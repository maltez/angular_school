function f() {
    console.log("f(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
        console.log(target);
        console.log(propertyKey);
    }
}

class C {
    @f()
    @g()
    method() {
        console.log('Method called');
        return 'Method called'
    }
}

let c = new C();
c.method();